import BottomSheetModal from '@components/shared/BottomSheetModal';
import CustomButton from '@components/shared/CustomButton';
import { icons } from '@constants/icon';
import type BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { View } from 'react-native';

import CountrySelectContent from './CountrySelectContent';
import GenderSelectContent from './GenderSelectContent';

export default function FilterButtonGroup() {
  const [isGenderModalOpen, setIsGenderModalOpen] = useState(false);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);

  const genderModalRef = useRef<BottomSheet>(null);
  const countryModalRef = useRef<BottomSheet>(null);

  const openGenderModal = () => {
    setIsGenderModalOpen(true);
    genderModalRef.current?.expand();
  };
  const closeGenderModal = () => {
    setIsGenderModalOpen(false);
    genderModalRef.current?.expand();
  };

  const openCountryModal = () => {
    setIsCountryModalOpen(true);
    countryModalRef.current?.expand();
  };
  const closeCountryModal = () => {
    setIsCountryModalOpen(false);
    countryModalRef.current?.expand();
  };

  return (
    <View className="absolute bottom-0 z-10 h-[20vh] w-full flex-row items-start justify-between rounded-t-3xl bg-dark-500 px-6 py-4">
      <CustomButton
        category="primary"
        shape="pill"
        size="small"
        disabled={false}
        full={false}
        prefixIcon={<icons.gender />}
        onPress={openGenderModal}
      >
        Gender
      </CustomButton>
      <CustomButton
        category="primary"
        shape="pill"
        size="small"
        disabled={false}
        full={false}
        prefixIcon={<icons.earth />}
        onPress={openCountryModal}
      >
        Country
      </CustomButton>
      {isGenderModalOpen && (
        <BottomSheetModal
          ref={genderModalRef}
          onClose={closeGenderModal}
          height="45%"
        >
          <GenderSelectContent
            onClose={closeGenderModal}
            initialSelected="Both"
          />
        </BottomSheetModal>
      )}
      {isCountryModalOpen && (
        <BottomSheetModal
          ref={countryModalRef}
          onClose={closeCountryModal}
          height="75%"
        >
          <CountrySelectContent
            onClose={closeCountryModal}
            initialSelected="Balanced"
          />
        </BottomSheetModal>
      )}
    </View>
  );
}
