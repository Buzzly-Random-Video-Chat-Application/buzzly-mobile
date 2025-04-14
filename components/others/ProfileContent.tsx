import { COLOR } from '@constants/color';
import { icons } from '@constants/icon';
import {
  faChevronRight,
  faCloudSun,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileContent() {
  const handleCopyCode = () => {
    // TODO: Thêm logic sao chép mã code (ví dụ: Clipboard.setString('8eqrqtumpig1i'))
    alert('Đã sao chép mã code!');
  };

  const handleEditID = () => {
    // TODO: Chuyển đến màn hình chỉnh sửa ID
    alert('Mở chỉnh sửa Buzzly ID');
  };

  const handleChangeCountry = () => {
    // TODO: Chuyển đến màn hình chọn quốc gia
    alert('Mở chọn quốc gia');
  };

  return (
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
        <Text className="font-sans-bold text-2xl text-white-50">
          Nguyen Quoc Thang
        </Text>
        <View className="mt-2 flex-row items-center rounded-full bg-gray-600 px-3 py-1">
          <Text className="font-sans-semibold text-gray-300">Code: </Text>
          <Text className="mr-2 font-sans-semibold text-gray-300">
            8eqrqtumpig1i
          </Text>
          <TouchableOpacity onPress={handleCopyCode}>
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
              Viet Nam
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

      {/* Đường phân cách */}
      <View className="mx-4 my-6 h-px bg-gray-600" />

      {/* Phần tiến trình Buzzly Badge */}
      <View className="mb-2 px-4">
        <Text className="mb-3 font-sans-medium text-gray-400">
          Track your progress towards the Buzzly Badge
        </Text>
        <View className="rounded-lg bg-gray-700 p-4">
          <View className="h-2 overflow-hidden rounded-full bg-gray-500">
            <View
              className="h-full bg-primary-500"
              style={{ width: '60%' }} // Giả sử tiến trình 60%
            />
          </View>
          <Text className="mt-2 font-sans-semibold text-gray-300">
            60/100 points
          </Text>
        </View>
      </View>

      <View className="flex-column my-6 items-start justify-between px-4">
        <Text className="mb-3 font-sans-medium text-gray-400">My Hashtag</Text>

        <TouchableOpacity className="flex-row items-center justify-between rounded-full bg-blue-50 px-4 py-2">
          <Text className="mr-2 w-fit font-sans-semibold text-blue-500">
            #Hello
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={10} color={COLOR.BLUE} />
        </TouchableOpacity>
      </View>

      <View className="flex-column mb-12 items-start justify-between px-4">
        <Text className="mb-3 font-sans-medium text-gray-400">My Benefits</Text>

        <View className="w-full flex-row items-center justify-between">
          <icons.benefit1 width={80} height={80} />
          <icons.benefit2 width={80} height={80} />
          <icons.benefit3 width={80} height={80} />
          <icons.benefit4 width={80} height={80} />
        </View>
      </View>
    </View>
  );
}
