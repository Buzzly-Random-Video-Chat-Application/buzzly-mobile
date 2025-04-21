import CustomButton from '@components/shared/CustomButton';
import { availableLanguages } from '@constants/app';
import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface LanguagesContentProps {
  initialSelected?: string[];
  onClose: (selectedLanguages: string[]) => void;
}

export default function LanguagesContent({
  initialSelected = [],
  onClose,
}: LanguagesContentProps) {
  const [selectedLanguages, setSelectedLanguages] =
    useState<string[]>(initialSelected);

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language),
      );
    } else if (selectedLanguages.length < 5) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleRemoveLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
  };

  const handleConfirm = () => {
    onClose(selectedLanguages);
  };

  // Lọc các ngôn ngữ chưa được chọn
  const remainingLanguages = availableLanguages.filter(
    (language) => !selectedLanguages.includes(language),
  );

  return (
    <View className="flex-1 rounded-[24px] bg-white-50 p-4">
      {/* Header */}
      <Text className="font-sans-semibold text-lg">
        Select Your Preferred Languages
      </Text>

      {/* Info */}
      <View className="my-4">
        <Text className="font-sans text-sm text-gray-500">
          You can meet friends who speak the languages you choose (up to 5).
        </Text>
        {selectedLanguages.length > 0 && (
          <>
            <View className="mt-2 flex-row items-center">
              <Text className="font-sans-semibold text-sm text-gray-700">
                Selected languages
              </Text>
            </View>
            <View className="mt-2">
              {selectedLanguages.map((language) => (
                <View
                  className="flex-row items-center justify-between py-3"
                  key={language}
                >
                  <View className="flex-row items-center">
                    <TouchableOpacity
                      className="mr-4 rounded-full bg-red-500 p-1"
                      onPress={() => handleRemoveLanguage(language)}
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        size={12}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>
                    <Text className="font-sans text-sm text-gray-500">
                      {language}
                    </Text>
                  </View>
                  <FontAwesomeIcon icon={faBars} size={18} color="#A8A8A8" />
                </View>
              ))}
            </View>
          </>
        )}
      </View>

      <View className="mt-2 flex-row items-center">
        <Text className="font-sans-semibold text-sm text-gray-700">
          Add more languages
        </Text>
      </View>

      {/* Language List */}
      <View>
        {remainingLanguages.map((language) => (
          <TouchableOpacity
            key={language}
            onPress={() => toggleLanguage(language)}
            className="flex-row items-center border-b border-gray-200 py-3"
          >
            <Text className="font-sans text-sm text-gray-500">{language}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Confirm Button */}
      <CustomButton
        category="primary"
        shape="pill"
        size="medium"
        onPress={handleConfirm}
        disabled={selectedLanguages.length === 0}
        full={false}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Confirm
      </CustomButton>
    </View>
  );
}
