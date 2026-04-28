import {s} from "./outBlock.style";
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Linking} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";

export function OutBlock({itemData}) {

    let pressed = null;

    const {height} = Dimensions.get("window");
    const insets = useSafeAreaInsets();

    function formatNumber(cost) {
        // Add safety check
        if (cost === undefined || cost === null || isNaN(cost)) {
            return 'N/A';
        }

        if (cost >= 1000000) {
            return (cost / 1000000).toFixed(2) + "M";
        } else if (cost >= 1000) {
            return (cost / 1000).toFixed(2) + "K";
        } else {
            return cost.toLocaleString();
        }
    }

    function lowerLimit() {
        let limit = 100;

        while (limit * 10 <= itemData?.data?.[pressed].cost) {
            limit *= 10;
        }

        return limit;
    }

    async function goTo() {
        let limit = await lowerLimit();
        Linking.openURL(`https://www.torn.com/page.php?sid=ItemMarket#/market/view=search&itemID=${itemData?.data?.[0].item_id}&sortField=price&sortOrder=ASC&priceFrom=${limit}`)
        limit = null;
    }

    function renderList() {
        if (!itemData?.data || itemData.data.length === 0) {
            return <Text style={s.blockText}>Loading...</Text>;
        }

        return itemData.data.map((item, index) => (
            <TouchableOpacity key={index} style={s.container} testID="Ron" onPress={() => [pressed = index, goTo()]}>
                <View style={s.block}>
                    <View style={s.head}>
                        <Text style={s.blockText}>cost: {formatNumber(item.cost)}   </Text>
                        <Text style={s.blockText}>quality: {item.quality}</Text>
                    </View>
                    <View style={s.line}/>
                    <View style={s.sub}>
                        <Text style={s.blockText}>expected price: {formatNumber(item.expected_price)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    return (
        <ScrollView style={s.scroll}>
            <SafeAreaView style={[s.safeArea, {top: insets.top - (height * 0.125)}]}>
                {renderList()}
            </SafeAreaView>
        </ScrollView>
    );
}