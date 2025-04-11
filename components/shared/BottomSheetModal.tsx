import BottomSheet from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ScrollView, StyleSheet, View } from 'react-native';

interface BottomSheetModalProps {
  onClose: () => void;
  children: React.ReactNode;
  height?: string;
}

const BottomSheetModal = forwardRef<BottomSheet, BottomSheetModalProps>(
  ({ onClose, children, height = '50%' }, ref) => {
    const snapPoints = useMemo(() => [height], [height]);
    const [isVisible, setIsVisible] = useState(false); // Bắt đầu với modal ẩn
    const scrollViewRef = useRef<ScrollView>(null);
    const isDragging = useRef(false);

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          setIsVisible(false);
          onClose();
        } else {
          setIsVisible(true);
        }
      },
      [onClose],
    );

    const handleAnimate = useCallback((_fromIndex: number, toIndex: number) => {
      setIsVisible(toIndex !== -1);
    }, []);

    const handleScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;

        if (
          contentHeight > 0 &&
          scrollY < -0.1 * contentHeight &&
          !isDragging.current
        ) {
          isDragging.current = true;
          if (ref && 'current' in ref && ref.current) {
            ref.current.close();
          }
        }
      },
      [ref],
    );

    const handleScrollEndDrag = useCallback(() => {
      isDragging.current = false;
    }, []);

    return (
      <Portal>
        {isVisible && (
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            ]}
          />
        )}
        <BottomSheet
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onAnimate={handleAnimate}
          enablePanDownToClose
          backgroundStyle={{
            backgroundColor: '#191A23',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
          handleComponent={() => null}
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            overflow: 'hidden',
          }}
        >
          <ScrollView
            ref={scrollViewRef}
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 0,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            onScrollEndDrag={handleScrollEndDrag}
            scrollEventThrottle={16}
          >
            {children}
          </ScrollView>
        </BottomSheet>
      </Portal>
    );
  },
);

export default BottomSheetModal;
