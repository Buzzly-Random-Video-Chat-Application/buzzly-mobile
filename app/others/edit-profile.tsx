/* eslint-disable @typescript-eslint/no-shadow */
import AvatarSection from '@components/others/AvatarSection';
import HashtagsContent from '@components/others/HashtagsContent';
import LanguagesContent from '@components/others/LanguagesContent';
import MyLocationContent from '@components/others/MyLocationContent';
import BottomSheetModal from '@components/shared/BottomSheetModal';
import {
  faAdd,
  faChevronRight,
  faHashtag,
  faLanguage,
  faLocationDot,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type BottomSheet from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EditProfile() {
  const [aboutMe, setAboutMe] = useState('');
  const [hashtags, setHashtags] = useState<string[]>(['Hello']);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    'Tiếng Việt',
  ]);
  const [selectedLocation, setSelectedLocation] = useState<string>('Viet Nam');

  const [isModalHashtagsOpen, setIsModalHashtagsOpen] = useState(false);
  const [isModalLanguagesOpen, setIsModalLanguagesOpen] = useState(false);
  const [isModalLocationOpen, setIsModalLocationOpen] = useState(false);

  const hashtagRef = useRef<BottomSheet>(null);
  const languageRef = useRef<BottomSheet>(null);
  const locationRef = useRef<BottomSheet>(null);

  const handleDeleteHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  const handleHashtagsConfirm = (selectedHashtags: string[]) => {
    setHashtags(selectedHashtags);
    setIsModalHashtagsOpen(false);
  };

  const handleLanguagesConfirm = (selectedLanguages: string[]) => {
    setSelectedLanguages(selectedLanguages);
    setIsModalLanguagesOpen(false);
  };

  const handleLocationConfirm = (selectedLocation: string) => {
    setSelectedLocation(selectedLocation);
    setIsModalLocationOpen(false);
  };

  return (
    <>
      <ScrollView
        className="flex-1 bg-white-50"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-1 p-4">
          {/* AVATAR SECTION */}
          <AvatarSection />

          {/* ABOUT ME SECTION */}
          <View className="my-4">
            <Text className="mb-2 text-lg font-semibold">About me</Text>
            <View className="h-28 rounded-md bg-light-300">
              <TextInput
                className="flex-1 p-2 text-sm text-dark-500"
                placeholder="Tell us about yourself"
                placeholderTextColor="#A8A8A8"
                value={aboutMe}
                onChangeText={setAboutMe}
                maxLength={250}
                multiline
              />
              <Text className="absolute bottom-2 right-2 text-xs text-[#A8A8A8]">
                {aboutMe.length}/250
              </Text>
            </View>
          </View>

          {/* MY HASHTAG SECTION */}
          <View className="mb-4">
            <Text className="mb-2 text-lg font-semibold">My hashtags</Text>
            <View className="rounded-md bg-light-300 px-2 py-3">
              <View className="flex-row items-center rounded-t-md bg-light-300">
                <FontAwesomeIcon icon={faHashtag} size={16} color="#191A23" />
                <Text className="text-md flex-1 px-2 font-sans text-[#A8A8A8]">
                  Adding hashtags now!
                </Text>
                <TouchableOpacity onPress={() => setIsModalHashtagsOpen(true)}>
                  <FontAwesomeIcon icon={faAdd} size={16} color="#191A23" />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center justify-center rounded-b-md bg-light-300">
                <FlatList
                  data={hashtags}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(_item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View className="mr-2 mt-4 flex-row items-center justify-between rounded-full bg-light-600 px-3 py-1">
                      <Text className="font-sans-bold text-base text-light-700">
                        #{item}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleDeleteHashtag(index)}
                        className="ml-2"
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          size={12}
                          color="#7B7B7B"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>

          {/* LANGUAGE OPTIONS SECTION */}
          <View className="mb-4">
            <Text className="mb-2 text-lg font-semibold">Language options</Text>
            <TouchableOpacity
              className="flex-row items-center justify-between rounded-md bg-light-300 px-2 py-3"
              onPress={() => setIsModalLanguagesOpen(true)}
            >
              <View className="flex-row items-center gap-2">
                <FontAwesomeIcon icon={faLanguage} size={18} color="#A8A8A8" />
                {selectedLanguages.length > 0 ? (
                  <Text className="font-sans text-sm text-dark-500">
                    {selectedLanguages.join(', ')}
                  </Text>
                ) : (
                  <Text className="font-sans text-sm text-[#A8A8A8]">
                    Add preferred language
                  </Text>
                )}
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={16}
                color="#191A23"
              />
            </TouchableOpacity>
          </View>

          {/* MY INFO SECTION */}
          <View className="mb-4">
            <Text className="mb-2 text-lg font-semibold">My info</Text>
            <TouchableOpacity
              onPress={() => router.push('/others/edit-nickname')}
              className="flex-row items-center justify-between rounded-md bg-light-300 px-2 py-3"
            >
              <View className="flex-row items-center gap-2">
                <FontAwesomeIcon icon={faUser} size={18} color="#A8A8A8" />
                <Text className="font-sans-semibold text-sm text-dark-500">
                  Nguyen Quoc Thang
                </Text>
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={16}
                color="#191A23"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsModalLocationOpen(true)}
              className="mt-3 flex-row items-center justify-between rounded-md bg-light-300 px-2 py-3"
            >
              <View className="flex-row items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size={18}
                  color="#A8A8A8"
                />
                <Text className="font-sans-semibold text-sm text-dark-500">
                  {selectedLocation}
                </Text>
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={16}
                color="#191A23"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* SHEET MODAL SECTION */}
      {isModalHashtagsOpen && (
        <BottomSheetModal
          ref={hashtagRef}
          onClose={() => setIsModalHashtagsOpen(false)}
          height="85%"
        >
          <HashtagsContent
            initialSelected={hashtags}
            onClose={handleHashtagsConfirm}
          />
        </BottomSheetModal>
      )}
      {isModalLanguagesOpen && (
        <BottomSheetModal
          ref={languageRef}
          onClose={() => setIsModalLanguagesOpen(false)}
          height="85%"
        >
          <LanguagesContent
            initialSelected={selectedLanguages}
            onClose={handleLanguagesConfirm}
          />
        </BottomSheetModal>
      )}
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
