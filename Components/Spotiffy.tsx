import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const cardsData = [
  {
    id: 1,
    imageUrl: 'https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg',
    text: 'Anuv Jain',
  },
  {
    id: 2,
    imageUrl:
      'https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431',
    text: 'Justice',
  },
  {
    id: 3,
    imageUrl:
      'https://cdn.starclinch.in/artist/the-local-train/the-local-train-3.jpg?w=360&dpr=2.6',
    text: 'The Local Train',
  },
  {
    id: 4,
    imageUrl:
      'https://scontent.fbom20-1.fna.fbcdn.net/v/t1.6435-9/110535830_3155882177799888_7718549492270985532_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=VmuIrZ6ME4MAX_3eCCE&_nc_ht=scontent.fbom20-1.fna&oh=00_AfDEB5ibjE-RMk6SXrKBw8YUoiiOovLcFNsauGCwwjSnVg&oe=660D36B1',
    text: 'One Direction',
  },
  {
    id: 5,
    imageUrl:
      'https://w0.peakpx.com/wallpaper/976/192/HD-wallpaper-hanuman-bajrangabli-thumbnail.jpg',
    text: 'Hanuman',
  },
  {
    id: 6,
    imageUrl:
      'https://i.scdn.co/image/ab67706c0000da8410fd0f28088feb10209beebe',
    text: 'Phonk',
  },
];

export default function Spotiffy() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.userImage}
        />
        <Text style={styles.username}>Good Evening</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={[styles.action, styles.music]}>
          <Text style={styles.actionText}>Music</Text>
        </View>

        <View style={[styles.action, styles.podcast]}>
          <Text style={styles.actionText}>Podcast</Text>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        {cardsData.map(card => (
          <View key={card.id} style={styles.cardItem}>
            <Image source={{uri: card.imageUrl}} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardText}>{card.text}</Text>
            </View>
          </View>
        ))}

        {/* Scroll View */}
        <View style={styles.scrollViewContainer}>
          <Text style={styles.headingText}>Popular Album</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>The Local Train</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d00001e0230cd885b02e47d7dbf76ff79',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>One Direction</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Taylor Swift</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Ed Sheeran</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273fff2cb485c36a6d8f639bdba',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>M83</Text>
            </View>
          </ScrollView>
          {/* Scroll View */}
          <Text style={styles.headingText}>Favourite Songs</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b27341b58c028c3ed6035074bdc1',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>A Thousand Years</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b2739d2efe43d5b7ebc7cb60ca81',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>The Night We Met</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273ac1f9e4ee7a60db0990976cd',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Laal Ishq</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273051e3b7883cbbb2612d67e3a',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Jaikal Mahakal</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273b852a616ae3a49a1f6b0f16e',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>METAMORPHOSIS</Text>
            </View>
          </ScrollView>
          {/* Scroll View */}
          <Text style={styles.headingText}>Recently Played</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b2734777dc841911efda78f7909b',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Maay Bavani</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d00001e02b87a2b8a90e64ea6a6ed080e',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Mazak</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273bc797cb1520d28733586fb35',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>Waqk Ki Baatein</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b27314f3c1b55c33e1cacda0ee3e',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>The Local Train</Text>
            </View>

            <View style={styles.cardAndTextContainer}>
              <View style={[styles.card, styles.elevatedCard]}>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
                  }}
                  style={styles.PlaylistCard}
                />
              </View>
              <Text style={styles.text}>The Local Train</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginLeft: 12,
    marginTop: 20,
  },
  username: {
    marginLeft: 15,
    fontSize: 22,
    marginTop: 15,
    color: 'white',
    fontFamily: 'GothamBold',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 18,
    marginLeft: 15,
    textAlign: 'center',
  },
  actionText: {
    color: 'white',
    fontFamily: 'Poppins-Regular'
  },
  music: {
    backgroundColor: '#212121',
  },
  podcast: {
    backgroundColor: '#212121',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardItem: {
    width: '50%', 
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, 
    paddingHorizontal: 5, 
  },
  cardImage: {
    height: 70,
    width: '40%', 
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  cardBody: {
    backgroundColor: '#171718',
    height: 70,
    width: '60%',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 10, 
  },
  cardText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
   fontFamily: 'Gotham-Bold'
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 8,
    color: 'white',
    margin: 15,
    fontFamily: 'GothamBold',
  },

  scrollViewContainer: {
    overflow: 'hidden',
  },
  scrollView: {
    paddingHorizontal: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 160,
    margin: 8,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
  },

  PlaylistCard: {
    height: 160,
    width: 160,
  },

  cardAndTextContainer: {
    marginRight: 6,
  },

  text: {
    color: '#b3b3b3',
    fontSize: 15,
    marginTop: 5,
    marginHorizontal: 10,
    fontFamily:'GothamBook'
  },
});
