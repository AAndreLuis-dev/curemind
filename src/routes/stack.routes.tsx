import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "../screens/Index";
import sleepquestion from "../screens/Sleepquestion";
import feelingsscreen from "../screens/Feelingsscreen";
import cadastroscreen from "../screens/Cadastroscreen";
import LifestyleQuestionScreen from "../screens/Lifestylequestionscreen";
import Home from "../screens/Home";
import AboutScreen from "../screens/Aboutscreen";
import AdmListScreen from "../screens/Admlistscreen";
import AnxietyBatePapo from "../screens/Anxietybatepapo";
import ComfortScenarioScreen from "../screens/Comfortscenarioscreen";
import ContentScreen from "../screens/Contentscreen";
import ImprovementQuestionScreen from "../screens/Improvementquestionscreen";

// Defina a lista de rotas com suas respectivas props
export type RootStackParamList = {
    Index: undefined;
    Sleep: undefined;
    Feelings: undefined;
    Register: undefined;
    LifeStyle: undefined;
    Home: undefined;
    About: undefined;
    AdminList: undefined;
    AnxietyChat: undefined;
    ComfortScenario: undefined;
    Content: undefined;
    Improvement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={index} />
            <Stack.Screen name="Register" component={cadastroscreen} />
            <Stack.Screen name="Sleep" component={sleepquestion} />
            <Stack.Screen name="Feelings" component={feelingsscreen} />
            <Stack.Screen name="LifeStyle" component={LifestyleQuestionScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="AdminList" component={AdmListScreen} />
            <Stack.Screen name="AnxietyChat" component={AnxietyBatePapo} />
            <Stack.Screen name="ComfortScenario" component={ComfortScenarioScreen} />
            <Stack.Screen name="Content" component={ContentScreen} />
            <Stack.Screen name="Improvement" component={ImprovementQuestionScreen} />
        </Stack.Navigator>
    );
}
