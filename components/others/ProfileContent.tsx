/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import BottomSheetModal from '@components/shared/BottomSheetModal';
import { COLOR } from '@constants/color';
import { icons } from '@constants/icon';
import {
  faChevronRight,
  faCloudSun,
  faCopy,
  faLanguage,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type BottomSheet from '@gorhom/bottom-sheet';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import MyLocationContent from './MyLocationContent';

interface ProfileContentProps {
  onClose?: () => void;
}

export default function ProfileContent({ onClose }: ProfileContentProps) {
  const [isModalLocationOpen, setIsModalLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('Viet Nam');
  const locationRef = useRef<BottomSheet>(null);
  const code = '8eqrqtumpig1i';

  // const [aboutMe, setAboutMe] = useState(
  //   "Hello, I am Nguyen Quoc Thang. I am a software engineer with a passion for technology and innovation. I love coding and creating amazing applications that make a difference in people's lives.",
  // );
  const [aboutMe] = useState(
    "Hello, I am Nguyen Quoc Thang. I am a software engineer with a passion for technology and innovation. I love coding and creating amazing applications that make a difference in people's lives.",
  );

  // const [hashtags, setHashtags] = useState<string[]>([
  //   'Hello',
  //   'Xin chao',
  //   'Kpop',
  //   'Viet Nam',
  // ]);
  const [hashtags] = useState<string[]>([
    'Hello',
    'Xin chao',
    'Kpop',
    'Viet Nam',
  ]);

  // const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
  //   'Vietnamese',
  //   'English',
  // ]);
  const [selectedLanguages] = useState<string[]>(['Vietnamese', 'English']);

  // Danh sách cặp màu
  const colorPairs = [
    { background: COLOR.LIGHT_BLUE, text: COLOR.BLUE },
    { background: COLOR.LIGHT_RED, text: COLOR.RED },
    { background: COLOR.LIGHT_GREEN, text: COLOR.GREEN },
    { background: COLOR.LIGHT_YELLOW, text: COLOR.YELLOW },
    { background: COLOR.LIGHT_DARK, text: COLOR.DARK },
  ];

  // Hàm random cặp màu
  const getRandomColorPair = () => {
    const randomIndex = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[randomIndex];
  };

  const handleCopyCode = async (code: string) => {
    await Clipboard.setStringAsync(code);
  };

  const handleEditID = () => {
    router.push('/others/buzzly-id');
    onClose?.();
  };

  const handleChangeCountry = () => {
    setIsModalLocationOpen(true);
  };

  const handleEditProfile = () => {
    router.push('/others/edit-profile');
    onClose?.();
  };

  const handleLocationConfirm = (selectedLocation: string) => {
    setSelectedLocation(selectedLocation);
    setIsModalLocationOpen(false);
  };

  return (
    <>
      <View className="flex-1 bg-dark-500">
        {/* Hình ảnh bìa */}
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
          }}
          style={{
            width: '100%',
            height: 500,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        />
        {/* Thông tin cá nhân */}
        <View className="flex-column mt-4 items-start justify-center px-4">
          <View className="flex-row items-center">
            <Text className="mr-2 font-sans-bold text-2xl text-white-50">
              Nguyen Quoc Thang
            </Text>
            <TouchableOpacity onPress={handleEditProfile}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={16}
                color={COLOR.PRIMARY}
              />
            </TouchableOpacity>
          </View>
          <View className="mt-2 flex-row items-center rounded-full bg-gray-600 px-3 py-1">
            <Text className="font-sans-semibold text-gray-300">Code: </Text>
            <Text className="mr-2 font-sans-semibold text-gray-300">
              {code}
            </Text>
            <TouchableOpacity onPress={() => handleCopyCode(code)}>
              <FontAwesomeIcon icon={faCopy} size={16} color={COLOR.PRIMARY} />
            </TouchableOpacity>
          </View>
          <View className="mt-6 space-y-2">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={handleEditID}
            >
              <Text className="w-10 font-sans-semibold text-gray-300">ID</Text>
              <Text className="mr-2 font-sans-semibold text-gray-300">
                Create your Buzzly ID
              </Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={10}
                color={COLOR.PRIMARY}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={handleChangeCountry}
            >
              <View className="w-10">
                <icons.vietnam />
              </View>
              <Text className="mr-2 font-sans-semibold text-gray-300">
                {selectedLocation}
              </Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={10}
                color={COLOR.PRIMARY}
              />
            </TouchableOpacity>

            <View className="flex-row items-center">
              <View className="w-10">
                <FontAwesomeIcon
                  icon={faCloudSun}
                  size={16}
                  color={COLOR.PRIMARY}
                  style={{ width: 40 }}
                />
              </View>
              <Text className="font-sans-semibold text-gray-300">00:00</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="mx-4 my-6 h-px bg-gray-600" />

        {/* Reference languages */}
        {selectedLanguages.length > 0 && (
          <View className="mb-6 flex-row items-center gap-2 px-4">
            <FontAwesomeIcon icon={faLanguage} size={24} color="#FFFFFF" />
            <Text className="font-sans text-white-50">
              {selectedLanguages.join(', ')}
            </Text>
          </View>
        )}

        {/* About me */}
        {aboutMe !== null && (
          <View className="flex-column mb-6 items-start justify-between px-4">
            <Text className="mb-3 font-sans-medium text-gray-400">
              About me
            </Text>
            <Text className="font-sans text-white-50">{aboutMe}</Text>
          </View>
        )}

        {/* My hashtags */}
        <View className="flex-column items-start justify-between px-4">
          <Text className="mb-4 font-sans-medium text-gray-400">
            My Hashtag
          </Text>
          <View className="flex-row flex-wrap">
            {hashtags.map((hashtag, _index) => {
              const { background, text } = getRandomColorPair() || {
                background: COLOR.GRAY,
                text: COLOR.LIGHT_GRAY,
              };
              return (
                <TouchableOpacity
                  key={hashtag}
                  className="mr-2 mt-2 flex-row items-center justify-between rounded-full px-4 py-2"
                  style={{ backgroundColor: background }}
                >
                  <Text
                    className="mr-2 w-fit font-sans-semibold"
                    style={{ color: text }}
                  >
                    #{hashtag}
                  </Text>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={10}
                    color={text}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* My benefits */}
        <View className="flex-column mb-12 mt-6 items-start justify-between px-4">
          <Text className="mb-3 font-sans-medium text-gray-400">
            My Benefits
          </Text>
          <View className="w-full flex-row items-center justify-between">
            <icons.benefit1overlay width={80} height={80} />
            <icons.benefit2overlay width={80} height={80} />
            <icons.benefit3overlay width={80} height={80} />
            <icons.benefit4overlay width={80} height={80} />
          </View>
        </View>
      </View>
      {isModalLocationOpen && (
        <BottomSheetModal
          ref={locationRef}
          onClose={() => setIsModalLocationOpen(false)}
          height="70%"
        >
          <MyLocationContent
            initialSelected={selectedLocation}
            onClose={handleLocationConfirm}
          />
        </BottomSheetModal>
      )}
    </>
  );
}
