/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Fragment, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Vibration,
} from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import Header from './Header';
import {mapHistory, mapTapPayload} from './../utils';
import {fetchTap, enterTap} from './../actions/tap.action';
import Dialog from './Dialog';
import isEmpty from 'lodash.isempty';

const stub = [
  {
    id: 'ff937185-59d9-4631-84f2-3ea79eb26a50',
    date: 'May 20 2020',
    weekday: 'Monday',
    tapCollection: [
      {
        id: 'c5dec74c-6512-40f7-96ab-affb9a7349a6',
        tapin: '10:00 AM',
        tapout: '01:00 PM',
      },
      {
        id: '2a8edd86-1c88-4440-9a8d-a0a59c83d299',
        tapin: '01:30 PM',
        tapout: '05:00 PM',
      },
    ],
    workDuration: '6.50 Hours',
  },
  {
    id: '813809bd-1413-4e4e-b736-b063a9e3f1cb',
    date: 'May 21 2020',
    weekday: 'Tuesday',
    tapCollection: [
      {
        id: '6b62ee9c-21ff-445f-97de-c38676b9731e',
        tapin: '10:30 AM',
        tapout: '12:00 PM',
      },
      {
        id: '45ec5e05-fd3d-4c8f-968e-a7a35c4a67c6',
        tapin: '01:30 PM',
        tapout: '05:00 PM',
      },
    ],
    workDuration: '5 Hours',
  },
  {
    id: '8113809bd-1413-4e4e-b736-b063a9e3f1cb',
    date: 'May 21 2020',
    weekday: 'Tuesday',
    tapCollection: [
      {
        id: '6b62e3e9c-21ff-445f-97de-c38676b9731e',
        tapin: '10:30 AM',
        tapout: '12:00 PM',
      },
      {
        id: '45ec54e05-fd3d-4c8f-968e-a7a35c4a67c6',
        tapin: '01:30 PM',
        tapout: '05:00 PM',
      },
    ],
    workDuration: '5 Hours',
  },
  {
    id: '813809bd-1413-4e4e-qb736-b063a9e3f1cb',
    date: 'May 21 2020',
    weekday: 'Tuesday',
    tapCollection: [
      {
        id: '6b62ee9c-21wff-445f-97de-c38676b9731e',
        tapin: '10:30 AM',
        tapout: '12:00 PM',
      },
      {
        id: '45ec5e05-fd3d-4c8ft-968e-a7a35c4a67c6',
        tapin: '01:30 PM',
        tapout: '05:00 PM',
      },
    ],
    workDuration: '5 Hours',
  },
  {
    id: '813809bd-1413-4e4e-bx736-b063a9e3f1cb',
    date: 'May 21 2020',
    weekday: 'Tuesday',
    tapCollection: [
      {
        id: '6b62ee9c-21ff-44y5f-97de-c38676b9731e',
        tapin: '10:30 AM',
        tapout: '12:00 PM',
      },
      {
        id: '45ec5e05-fd3d-4c8f-968e-a7a3v5c4a67c6',
        tapin: '01:30 PM',
        tapout: '05:00 PM',
      },
    ],
    workDuration: '5 Hours',
  },
];

const styles = StyleSheet.create({
  container: {},
  content: {},
  listHeader: {
    backgroundColor: '#4863A0',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listHeaderText: {
    color: '#fff',
  },
  listItem: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listFooter: {
    backgroundColor: '#87AFC7',
  },
  listFooterText: {
    color: '#fff',
  },
  footer: {
    backgroundColor: 'yellow',
    height: 100,
  },
  pressView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  press: {
    height: 100,
    width: 70,
  },
});

const Dashboard = ({navigation, fetchTap, user, enterTap}) => {
  const pressAnim = useRef(new Animated.Value(1)).current;
  const [tapData, setTapData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [reason, setReason] = useState(false);
  // const [apiErr, setApiErr] = useState('');
  useEffect(() => {
    fetchHistory();
  }, []);
  const fetchHistory = function(callback) {
    fetchTap(user.id, history => {
      // setApiErr(JSON.stringify(history));
      const modifiedHistory = mapHistory(history);
      setTapData(modifiedHistory);
      if (typeof callback === 'function') {
        callback(modifiedHistory);
      }
    });
  };
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   fetchHistory(() => {
  //     setRefreshing(false);
  //   });
  // };
  const handlePressIn = function() {
    Animated.spring(pressAnim, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = function() {
    Animated.spring(pressAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyle = {
    transform: [{scale: pressAnim}],
  };
  const onSubmit = () => {
    Vibration.vibrate();
    fetchHistory(history => {
      const today = moment().format('YYYY-MM-DD');
      const todayHistory = history.find(item => item.date === today);
      if (
        !isEmpty(todayHistory) &&
        todayHistory.tapCollection.length > 3 &&
        isEmpty(
          todayHistory.tapCollection[todayHistory.tapCollection.length - 1]
            .tap_out,
        )
      ) {
        setShowDialog(true);
      } else {
        const payLoad = mapTapPayload(todayHistory, user.id);
        enterTap(payLoad, () => {
          fetchHistory();
        });
      }
    });
  };
  const onDialogSend = () => {
    const today = moment().format('YYYY-MM-DD');
    const todayHistory = tapData.find(item => item.date === today);
    const payLoad = mapTapPayload(todayHistory, user.id);
    payLoad.reason = reason;
    enterTap(payLoad, () => {
      fetchHistory();
      setReason('');
      setShowDialog(false);
    });
  };

  return (
    <Container style={styles.container}>
      <Header navigation={navigation} title="Dashboard" showLogOut />
      <Content style={styles.content}>
        {/* <Text>{apiErr}</Text> */}
        <List>
          {tapData.map(item => (
            <View key={item.id}>
              <ListItem style={styles.listHeader} itemDivider>
                <Text style={styles.listHeaderText}>{item.date}</Text>
                <Text style={styles.listHeaderText}>{item.weekDay}</Text>
              </ListItem>
              {item.tapCollection.map(tapItem => (
                <ListItem style={styles.listItem} key={tapItem.id}>
                  <Text>{`Tap in - ${
                    tapItem.tap_in
                      ? moment(tapItem.tap_in).format('h:mm A')
                      : ''
                  }`}</Text>
                  <Text>{`Tap out - ${
                    tapItem.tap_out
                      ? moment(tapItem.tap_out).format('h:mm A')
                      : 'TBA'
                  }`}</Text>
                </ListItem>
              ))}
              <ListItem style={styles.listFooter} itemDivider>
                <Text style={styles.listFooterText}>{item.workDuration}</Text>
              </ListItem>
            </View>
          ))}
        </List>
      </Content>
      <View style={styles.pressView}>
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={onSubmit}>
          <Animated.View style={[animatedStyle]}>
            <Image
              style={styles.press}
              source={require('./../images/press.png')}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <Dialog
        value={reason}
        onChange={setReason}
        open={showDialog}
        onCancel={setShowDialog}
        onSend={onDialogSend}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

/**
 *  connect function of redux
 */
export default connect(
  mapStateToProps,
  {
    fetchTap,
    enterTap,
  },
)(Dashboard);
