import CustomButton from '@components/shared/CustomButton';
import { countries } from '@constants/country';
import { useState } from 'react';
import { Text, View } from 'react-native';

import RadioButton from './RadioButton';

interface CountrySelectContentProps {
  onClose: () => void;
  initialSelected?: string;
}

export default function CountrySelectContent({
  onClose,
  initialSelected,
}: CountrySelectContentProps) {
  const userCountryCode = 'VN';
  const userCountry = countries.find(
    (country) => country.code === userCountryCode,
  );
  const [countrySelected, setCountrySelected] = useState(initialSelected);

  const handleCountryChange = (country: string) => {
    setCountrySelected(country);
  };

  return (
    <View className="flex-1 justify-start rounded-[24px] bg-white-50 p-4">
      <Text className="font-sans-bold text-2xl text-dark-500">
        Regional Priority
      </Text>
      <View className="my-4 flex-col">
        <RadioButton
          label="Balanced"
          isSelected={countrySelected === 'Balanced'}
          onPress={() => handleCountryChange('Balanced')}
        />
        <RadioButton
          label={userCountry?.name || 'Unknown'}
          isSelected={countrySelected === userCountry?.name}
          onPress={() => handleCountryChange(userCountry?.name || 'Unknown')}
        />

        <Text className="my-4 font-sans text-base text-dark-500">
          Select the country you want to pair with
        </Text>

        {countries.map(
          (country, _index) =>
            country.code !== userCountryCode && (
              <RadioButton
                key={country.name}
                label={country.name}
                isSelected={countrySelected === country.name}
                onPress={() => handleCountryChange(country.name)}
              />
            ),
        )}
      </View>

      <View className="flex-row items-center justify-between gap-4">
        <CustomButton
          category="primary"
          shape="pill"
          size="medium"
          onPress={onClose}
          disabled={false}
          full
        >
          Go to match
        </CustomButton>
        <CustomButton
          category="default"
          shape="pill"
          size="medium"
          onPress={onClose}
          disabled={false}
          full={false}
        >
          Close
        </CustomButton>
      </View>
    </View>
  );
}
