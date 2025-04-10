// @components/shared/BottomSheetModal.tsx
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { forwardRef, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BottomSheetModalProps {
  onClose: () => void;
}

const BottomSheetModal = forwardRef<BottomSheet, BottomSheetModalProps>(
  ({ onClose }, ref) => {
    const snapPoints = useMemo(() => ['30%', '70%'], []);

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          onClose();
        }
      },
      [onClose],
    );

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // Overlay mờ thay cho BlurView
            ]}
          />
        </BottomSheetBackdrop>
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: '#FFFFFF' }}
        handleIndicatorStyle={{ backgroundColor: '#191A23' }}
      >
        <View className="flex-1 p-4">
          <Text className="mb-4 font-sans-bold text-2xl">
            Bottom Sheet Content
          </Text>
          <Text className="mb-4 font-sans-medium text-base">
            This is a Bottom Sheet with a blurred background. You can drag it
            down to close.
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/others/settings')}
            className="items-center rounded-lg bg-dark-500 p-3"
          >
            <Text className="text-white font-sans-medium">Go to Settings</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  },
);

export default BottomSheetModal;
