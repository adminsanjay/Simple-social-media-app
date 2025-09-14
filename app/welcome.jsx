import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helper/common';
const Welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require('../assets/images/welcome.png')}
        />

        {/* Title and Punchline */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>DBMS</Text>
          <Text style={styles.punchline}>Discuss, Bond, Meme, Share</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push('/signUp')}
          />
          
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable onPress={() => router.push('/login')}>
              <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(80),
    height: hp(30),
    alignSelf: 'center',
  },
  title: {
    fontSize: hp(4),
    fontWeight: '800', // safer than theme.fonts.extraBold unless it’s defined
    textAlign: 'center',
    color: theme.colors.text,
  },
  punchline: {
    textAlign: 'center',
    fontSize: hp(2),
    color: theme.colors.text,
    paddingHorizontal: wp(10),
  },
  footer: {
    gap: 30,
    width: '100%',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
  },
  loginText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
    textAlign: 'center',
  },
});
