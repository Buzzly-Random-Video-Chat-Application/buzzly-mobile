// app/(tabs)/message.tsx
import BottomSheetModal from '@components/shared/BottomSheetModal';
import type BottomSheet from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useRef } from 'react';
import { Button, Text, View } from 'react-native';

export default function Message() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-sans-bold text-2xl">Welcome to Message Page</Text>
      <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
      <Button
        title="Go to settings"
        onPress={() => {
          router.push('/others/settings');
        }}
      />

      {/* Bottom Sheet */}
      <BottomSheetModal ref={bottomSheetRef} onClose={closeBottomSheet} />
    </View>
  );
}
