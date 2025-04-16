import BenefitItem from '@components/others/BenefitItem';
import { icons } from '@constants/icon';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Store() {
  const handlePurchase = (plan: string) => {
    console.log(`Purchasing ${plan}`);
  };

  const gemPackages = [
    { gems: 100, price: '1.99 $' },
    { gems: 250, price: '4.99 $' },
    { gems: 500, price: '9.99 $' },
    { gems: 1000, price: '14.99 $' },
    { gems: 2000, price: '19.99 $' },
    { gems: 5000, price: '25.99 $' },
  ];

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-4">
        {/* BENEFIT SECTION */}
        <View
          className="flex-column mb-4 justify-center rounded-lg bg-dark-500 py-2 pl-1 pr-4 shadow-sm"
          style={{
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <BenefitItem
            icon={<icons.benefit1 width={70} height={70} />}
            title="Buzzly Basic"
            description="Cheap price, many benefits"
            duration="1 month"
            onPress={() => handlePurchase('Buzzly Basic')}
          />
          <BenefitItem
            icon={<icons.benefit2 width={70} height={70} />}
            title="Buzzly Plus"
            description="Mix global and enjoy the rear camera"
            duration="1 month"
            onPress={() => handlePurchase('Buzzly Plus')}
          />
          <BenefitItem
            icon={<icons.benefit3 width={70} height={70} />}
            title="Buzzly Premium"
            description="Many more premium benefits"
            duration="1 month"
            onPress={() => handlePurchase('Buzzly Premium')}
          />
          <BenefitItem
            icon={<icons.benefit4 width={70} height={70} />}
            title="Buzzly Supreme"
            description="Experience the full Buzzly with just one subscription"
            duration="1 month"
            onPress={() => handlePurchase('Buzzly Supreme')}
          />
        </View>

        {/* PURCHASE SECTION */}
        <Text className="mb-4 text-xl font-bold text-dark-500">
          Purchase Gems
        </Text>
        <View className="flex-row flex-wrap gap-4">
          {gemPackages.map((pkg, _index) => (
            <TouchableOpacity
              key={pkg.gems}
              onPress={() => handlePurchase(`${pkg.gems} Gems`)}
              className="w-[45%] rounded-xl bg-dark-500 p-4"
              style={{
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            >
              <View className="items-center">
                <View className="flex-row items-center justify-center">
                  <FontAwesomeIcon icon={faGem} size={20} color="#FFD700" />
                  <Text className="mb-1 ml-2 text-xl font-bold text-white-50">
                    {pkg.gems}
                  </Text>
                </View>
                <Text className="mb-2 text-sm text-gray-200">Gems</Text>
                <View className="flex-row items-center justify-center rounded-full bg-primary-600 px-3 py-1">
                  <Text className="text-sm font-semibold text-white-50">
                    {pkg.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
