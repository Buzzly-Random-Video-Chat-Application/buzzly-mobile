import { Text, TouchableOpacity, View } from 'react-native';

interface RewardsProgramGuideContentProps {
  onClose: () => void;
}

export default function RewardsProgramGuideContent({
  onClose,
}: RewardsProgramGuideContentProps) {
  return (
    <View className="flex-1 rounded-t-[24px] bg-white-50">
      <View className="flex-1 p-4">
        <Text className="mb-4 font-sans-bold text-xl text-dark-500">
          Rewards Program Guide
        </Text>

        <View className="mb-4">
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Link a Payoneer account to receive payments.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Payment processing fees will be charged to the sender...
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Only individuals meeting the following conditions are eligible:
            </Text>
          </View>
          <View className="mb-2 ml-4 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Must stream at least 10 times, with each session lasting no less
              than 10 minutes within 30 days from the request submission.
            </Text>
          </View>
          <View className="mb-2 ml-4 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Must stream for a total of at least 30 minutes before submitting a
              request.
            </Text>
          </View>
          <View className="mb-2 ml-4 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Must receive stars from at least 30 different gift senders.
            </Text>
          </View>
          <View className="mb-2 ml-4 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Must have at least 30 followers.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              You may submit a request once every 2 weeks. The submission period
              can be extended if a public holiday falls on the submission date.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Reward requests must be within the range of 250,000 to 3,500,000
              Stars.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              The method of completion will depend on the service you have
              registered to receive payments for. Otherwise, if the program you
              are participating in, such as Buzzly Live, your request may be
              subject to restrictions on the use of entertainment services
              according to the Terms of Use.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Buzzly’s Terms of Service and Buzzly Live Reward Program Policy.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              Payments will be transferred to your digital wallet...
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="mr-2 text-base text-dark-500">•</Text>
            <Text className="font-sans-regular flex-1 text-base text-dark-500">
              The refund method will be supported based on the options you have
              selected.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onClose}
          className="mx-4 mb-4 items-center justify-center rounded-full bg-dark-500 py-3"
        >
          <Text className="font-sans-medium text-base text-white-50">
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
