import CustomButton from '@components/shared/CustomButton';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface HashtagsContentProps {
  initialSelected?: string[];
  onClose: (selectedHashtags: string[]) => void;
}

export default function HashtagsContent({
  initialSelected = [],
  onClose,
}: HashtagsContentProps) {
  const availableHashtags = [
    'bts',
    'happybirthday',
    'giaoluu',
    'côđơn',
    'netflix',
    'mệtmỏi',
    'nhữngngườiđẹp',
    'buluşma',
    'Xin chào',
    'kpop',
    'instagram',
    'arkadaşedin',
    'havadansudan',
    'danişmanlik',
    'zamanöldürme',
    'tandem',
    'Moda',
    'Yemek',
    'Kedi',
    'Köpek',
    'Animasyon',
    'Parti',
    'Kahve',
    'Alışveriş',
    'Müzik',
    'Film',
    'Futbol',
    'Seyahat',
    'oyun',
    'araba',
    'yürüyüşeçik',
    'bisiklet',
    'fitness',
    'fotoğrafçılık',
    'dans',
    'tv',
    'sigara',
    'alkol',
    'aşçılık',
    'okuma',
    'kendinyap',
    'güzellik',
    'sıkılmış',
    'kızgın',
    'mutlu',
    'üzgün',
    'memnuniyet',
    'kasvetli',
    'heyecan',
    'esprili',
    'vegan',
    'hương',
    'thểthao',
    'vovong',
    'vui vẻ',
    'bươngng',
  ];

  const [selectedHashtags, setSelectedHashtags] =
    useState<string[]>(initialSelected);

  const toggleHashtag = (hashtag: string) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter((tag) => tag !== hashtag));
    } else {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }
  };

  const handleConfirm = () => {
    onClose(selectedHashtags);
  };

  return (
    <View className="flex-1 rounded-[24px] bg-white-50 p-4">
      <Text className="font-sans-semibold text-lg">Select Hashtags</Text>
      <View className="my-4 flex-row flex-wrap">
        {availableHashtags.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => toggleHashtag(item)}
            className={`m-1 rounded-full border px-3 py-1 ${
              selectedHashtags.includes(item)
                ? 'border-primary-600 bg-primary-100'
                : 'border-gray-300 bg-white-50'
            }`}
          >
            <Text
              className={`font-sans text-sm ${
                selectedHashtags.includes(item)
                  ? 'text-primary-700'
                  : 'text-gray-500'
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <CustomButton
        category="primary"
        shape="pill"
        size="medium"
        onPress={handleConfirm}
        disabled={false}
        full
        style={{ marginBottom: 16 }}
      >
        Confirm
      </CustomButton>
    </View>
  );
}
