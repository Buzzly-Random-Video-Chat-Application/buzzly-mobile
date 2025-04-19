import CustomButton from '@components/shared/CustomButton';
import { locations } from '@constants/app';
import { icons } from '@constants/icon';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface MyLocationContentProps {
  initialSelected?: string;
  onClose: (selectedStatus: string) => void;
}

export default function MyLocationContent({
  initialSelected = '',
  onClose,
}: MyLocationContentProps) {
  const [selectedStatus, setSelectedStatus] = useState(initialSelected);

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
  };

  const handleApply = () => {
    onClose(selectedStatus);
  };

  return (
    <View className="flex-1 rounded-[24px] bg-white-50 p-4">
      {/* Header with Close Button */}
      <Text className="text-lg font-semibold">My Location</Text>
      <View className="my-4 flex-row flex-wrap items-center justify-center">
        <TouchableOpacity
          key="default location"
          onPress={() => handleSelectStatus('Viet Nam')}
          className={`relative w-[30%] p-2 ${
            selectedStatus === 'Viet Nam'
              ? 'border border-primary-500 bg-primary-100'
              : 'border border-light-500 bg-light-500'
          } m-1 flex-col items-center justify-center rounded-xl py-6`}
        >
          <icons.solar_earth width={48} height={48} />
          <Text
            className={`mt-2 font-sans text-base ${
              selectedStatus === 'Viet Nam' ? 'text-dark-500' : 'text-gray-400'
            } text-center`}
          >
            Viet Nam
          </Text>
          <icons.vietnam
            style={{ position: 'absolute', top: 60, left: 30 }}
            width={18}
            height={18}
          />
        </TouchableOpacity>
        {locations.map((location) => (
          <TouchableOpacity
            key={location.name}
            onPress={() => handleSelectStatus(location.name)}
            className={`w-[30%] p-2 ${
              selectedStatus === location.name
                ? 'border border-primary-500 bg-primary-100'
                : 'border border-light-500 bg-light-500'
            } m-1 flex-col items-center justify-center rounded-xl py-6`}
          >
            <location.icon width={48} height={48} />
            <Text
              className={`mt-2 font-sans text-base ${
                selectedStatus === location.name
                  ? 'text-dark-500'
                  : 'text-gray-400'
              } text-center`}
            >
              {location.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Apply Button */}
      <CustomButton
        category="primary"
        shape="pill"
        size="medium"
        onPress={handleApply}
        disabled={!selectedStatus}
        full={false}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Apply
      </CustomButton>
    </View>
  );
}
