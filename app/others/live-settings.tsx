import { icons } from '@constants/icon';
import {
  faChevronRight,
  faGem,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function LiveSettings() {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-4">
        <View className="flex-column mb-4 items-center justify-center rounded-lg bg-dark-500 px-4 py-3 shadow-sm">
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <View className="flex-column mt-4 items-center justify-center">
            <Text className="mb-2 font-sans-medium text-lg text-white-50">
              Nguyen Quoc Thang
            </Text>
            <TouchableOpacity className="mb-2 flex-row items-center">
              <icons.vietnam />
              <Text className="ml-2 font-sans-semibold text-white-50">
                Viet Nam
              </Text>
            </TouchableOpacity>
            <Text className="font-sans-light text-sm text-white-50">
              Please introduce yourself
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm"
          onPress={() => router.push('/others/store')}
        >
          <Text className="text-md font-sans-medium text-dark-500">Store</Text>
          <View className="flex-row items-center">
            <FontAwesomeIcon icon={faGem} size={12} color="#FFAA00" />
            <Text className="mx-2 font-sans-semibold text-base text-dark-500">
              0
            </Text>
            <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm"
          onPress={() => router.push('/others/wallet')}
        >
          <Text className="text-md font-sans-medium text-dark-500">
            Star Wallet
          </Text>
          <View className="flex-row items-center">
            <FontAwesomeIcon icon={faStar} size={12} color="#FFAA00" />
            <Text className="mx-2 font-sans-semibold text-base text-dark-500">
              0
            </Text>
            <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
          </View>
        </TouchableOpacity>

        <View className="flex-column mb-4 items-center rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <View className="mb-8 w-full flex-row items-center justify-between">
            <Text className="text-md font-sans-medium text-dark-500">
              Level
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <View className="mr-2 flex-row items-center rounded-full bg-primary-600 px-2 py-1">
                <Text className="font-sans-medium text-xs text-white-50">
                  Level 1
                </Text>
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={12}
                color="#191A23"
              />
            </TouchableOpacity>
          </View>

          <View className="h-2 w-full overflow-hidden rounded-full bg-gray-500">
            <View
              className="h-full rounded-full bg-primary-600"
              style={{ width: '80%' }}
            />
          </View>
        </View>

        <View className="flex-column mb-4 items-center rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <View className="mb-8 w-full flex-row items-center justify-between">
            <Text className="text-md font-sans-medium text-dark-500">
              {`Leader's Tier`}
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="mx-2 font-sans-semibold text-base text-dark-500">
                0
              </Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={12}
                color="#191A23"
              />
            </TouchableOpacity>
          </View>

          <View className="h-2 w-full overflow-hidden rounded-full bg-gray-500">
            <View
              className="h-full rounded-full bg-primary-600"
              style={{ width: '40%' }}
            />
          </View>
        </View>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            VIP Level
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
        </TouchableOpacity>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            Followers
          </Text>
          <View className="flex-row items-center">
            <Text className="mr-2 font-sans-semibold text-base text-dark-500">
              0
            </Text>
            <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            Following
          </Text>
          <View className="flex-row items-center">
            <Text className="mr-2 font-sans-semibold text-base text-dark-500">
              0
            </Text>
            <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            Live Block List
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
        </TouchableOpacity>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            Live Tools
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
        </TouchableOpacity>

        <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-white-50 px-4 py-3 shadow-sm">
          <Text className="text-md font-sans-medium text-dark-500">
            Live Notifications
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#191A23" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
