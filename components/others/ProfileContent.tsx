// import { icons } from '@constants/icon';
// import {
//   faChevronRight,
//   faCloudSun,
//   faCopy,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { Image, Text, View } from 'react-native';

// export default function ProfileContent() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderTopLeftRadius: 24,
//         borderTopRightRadius: 24,
//       }}
//     >
//       <Image
//         source={{
//           uri: 'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
//         }}
//         style={{
//           width: '100%',
//           height: 500,
//           borderTopLeftRadius: 24,
//           borderTopRightRadius: 24,
//         }}
//       />

//       <View className="flex-column w-[100%] items-start justify-center gap-4 p-4">
//         <View className="flex-column items-start justify-center">
//           <Text className="font-sans-medium text-2xl text-white-50">
//             Nguyen Quoc Thang
//           </Text>
//           <View className="mt-2 flex-row items-start justify-start rounded-full bg-gray-500 px-2 py-1">
//             <Text className="font-sans-semibold text-gray-200">Code: </Text>
//             <Text className="mr-2 font-sans-semibold text-gray-200">
//               8eqrqtumpig1i
//             </Text>
//             <FontAwesomeIcon icon={faCopy} size={16} color="#B9FF66" />
//           </View>
//         </View>

//         <View className="flex-column items-start justify-center gap-1">
//           <View className="flex-row items-center justify-start">
//             <Text className="mr-4 font-sans-semibold text-gray-200">ID</Text>
//             <Text className="mr-2 font-sans-semibold text-gray-200">
//               Create your Buzzly ID
//             </Text>
//             <FontAwesomeIcon icon={faChevronRight} size={10} color="#B9FF66" />
//           </View>

//           <View className="flex-row items-center justify-start">
//             <icons.vietnam />
//             <Text className="ml-4 mr-2 font-sans-semibold text-gray-200">
//               Viet Nam
//             </Text>
//             <FontAwesomeIcon icon={faChevronRight} size={10} color="#B9FF66" />
//           </View>

//           <View className="flex-row items-center justify-start">
//             <FontAwesomeIcon
//               icon={faCloudSun}
//               size={16}
//               color="#FFFFFF"
//               style={{ marginRight: 16 }}
//             />
//             <Text className="mr-2 font-sans-semibold text-gray-200">00:00</Text>
//           </View>
//         </View>
//       </View>

//       <View className="mb-4 h-[0.5px] w-[85%] bg-gray-50" />

//       <View className="w-[100%] flex-col items-center justify-center gap-4">
//         <Text className="w-[85%] font-sans-medium text-gray-300">
//           Track your progress towards the Buzzly Badge
//         </Text>
//         <View className="h-[100px] w-[85%] rounded-lg bg-white-50" />
//       </View>

//       <View className="my-5 h-[1px] w-[85%] bg-gray-50" />
//     </View>
//   );
// }

import { icons } from '@constants/icon';
import {
  faChevronRight,
  faCloudSun,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  primary: '#B9FF66',
  background: '#191A23',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  divider: '#3F3F46',
};

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
    <View className="flex-1 bg-[#191A23]">
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
            <FontAwesomeIcon icon={faCopy} size={16} color={COLORS.primary} />
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
              color={COLORS.primary}
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
              color={COLORS.primary}
            />
          </TouchableOpacity>

          <View className="flex-row items-center">
            <View className="w-10">
              <FontAwesomeIcon
                icon={faCloudSun}
                size={16}
                color={COLORS.textPrimary}
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
      <View className="mb-6 px-4">
        <Text className="mb-3 font-sans-medium text-gray-400">
          Track your progress towards the Buzzly Badge
        </Text>
        <View className="rounded-lg bg-gray-700 p-4">
          <View className="h-2 overflow-hidden rounded-full bg-gray-500">
            <View
              className="h-full bg-[#B9FF66]"
              style={{ width: '60%' }} // Giả sử tiến trình 60%
            />
          </View>
          <Text className="mt-2 font-sans-semibold text-gray-300">
            60/100 points
          </Text>
        </View>
      </View>
    </View>
  );
}
