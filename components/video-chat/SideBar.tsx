import {
  faArchive,
  faCamera,
  faRotate,
  faSprayCanSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity, View } from 'react-native';

const Sidebar = () => {
  return (
    <View className="absolute left-4 top-[40%] z-10 rounded-full bg-dark-500 px-3 py-4">
      <View className="flex h-full items-center justify-between gap-4">
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCamera} size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faRotate} size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSprayCanSparkles} size={20} color="white" />
        </TouchableOpacity>
        <View className="h-px w-full bg-white-50" />
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArchive} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;
