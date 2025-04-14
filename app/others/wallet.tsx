import ClaimsProgramGuideContent from '@components/others/ClaimsProgramGuideContent';
import RewardsProgramGuideContent from '@components/others/RewardsProgramGuideContent';
import BottomSheetModal from '@components/shared/BottomSheetModal';
import { icons } from '@constants/icon';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Wallet() {
  const rewardProgramGuideRef = useRef<BottomSheet>(null);
  const rewardClaimDetailsRef = useRef<BottomSheet>(null);
  const [isModalRewardProgramGuideOpen, setIsModalRewardProgramGuideOpen] =
    useState(false);
  const [isModalClaimDetailsOpen, setIsModalClaimDetailsOpen] = useState(false);

  const handleOpenRewardProgramGuide = () => {
    setIsModalRewardProgramGuideOpen(true);
    rewardProgramGuideRef.current?.expand();
  };
  const handleOpenRewardClaimDetails = () => {
    setIsModalClaimDetailsOpen(true);
    rewardClaimDetailsRef.current?.expand();
  };

  const handleCloseRewardProgramGuide = () => {
    setIsModalRewardProgramGuideOpen(false);
    rewardProgramGuideRef.current?.close();
  };
  const handleCloseRewardClaimDetails = () => {
    setIsModalClaimDetailsOpen(false);
    rewardClaimDetailsRef.current?.close();
  };
  return (
    <SafeAreaView className="flex-1 bg-white-50">
      {/* Phần chính của màn hình */}
      <View className="flex-1 px-4">
        {/* Card Star Wallet */}
        <View className="mt-6 w-full items-center justify-center rounded-2xl bg-dark-500 py-4 shadow-md">
          <View className="mb-2 flex-row items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faStar} size={18} color="#B9FF66" />
            <Text className="font-sans-medium text-base text-white-50">
              Star Wallet
            </Text>
          </View>
          <Text className="mb-2 font-sans-semibold text-4xl text-white-50">
            0
          </Text>
          <Text className="font-sans-regular text-center text-sm text-white-50">
            Get 10 stars for every gem received.
          </Text>
        </View>

        {/* Card Cash Reward */}
        <View className="mt-6 w-full flex-row items-center justify-between rounded-2xl border border-dark-50 px-2 py-1">
          <icons.ticket width={32} height={32} />
          <View className="mx-4 flex-1">
            <Text className="font-sans-medium text-base text-dark-500">
              Cash Reward
            </Text>
            <Text className="font-sans-regular text-sm text-dark-400">
              Get cash rewards with your Stars!
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-dark-500 px-4 py-2">
            <Text className="font-sans-medium text-sm text-white-50">
              Request
            </Text>
          </TouchableOpacity>
        </View>

        {/* Liên kết điều hướng */}
        <TouchableOpacity
          className="mt-6 w-full flex-row items-center justify-between py-2"
          onPress={handleOpenRewardProgramGuide}
        >
          <Text className="font-sans-regular text-base text-dark-500">
            Rewards Program Guide
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full flex-row items-center justify-between py-2"
          onPress={handleOpenRewardClaimDetails}
        >
          <Text className="font-sans-regular text-base text-dark-500">
            Reward Claim Details
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} color="#000" />
        </TouchableOpacity>
      </View>

      {isModalRewardProgramGuideOpen && (
        <BottomSheetModal
          ref={rewardProgramGuideRef}
          onClose={handleCloseRewardProgramGuide}
          height="80%"
        >
          <RewardsProgramGuideContent onClose={handleCloseRewardProgramGuide} />
        </BottomSheetModal>
      )}

      {isModalClaimDetailsOpen && (
        <BottomSheetModal
          ref={rewardClaimDetailsRef}
          onClose={handleCloseRewardClaimDetails}
          height="30%"
        >
          <ClaimsProgramGuideContent onClose={handleCloseRewardClaimDetails} />
        </BottomSheetModal>
      )}
    </SafeAreaView>
  );
}
