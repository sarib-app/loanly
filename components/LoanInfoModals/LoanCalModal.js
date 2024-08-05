import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Global/Branding/colors';

const LoanCalModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalTitle}>Loan Details</Text>
            <View style={styles.infoItem}>
              <Icon name="attach-money" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Loan Amount (Principal)</Text>
                <Text style={styles.infoDetail}>• INR 5,000</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="percent" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Annual Percentage Rate (APR)</Text>
                <Text style={styles.infoDetail}>• 12%</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="schedule" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Loan Term</Text>
                <Text style={styles.infoDetail}>• 3 months</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="money" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Origination Fee</Text>
                <Text style={styles.infoDetail}>• 3% of the loan amount 150</Text>
              </View>
            </View>
            <Text style={styles.sectionTitle}>Total Cost of the Loan</Text>
            <View style={styles.infoItem}>
              <Icon name="payments" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Total Payments</Text>
                <Text style={styles.infoDetail}>• 5,150.00</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="money-off" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Origination Fee</Text>
                <Text style={styles.infoDetail}>• 150</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="calculate" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Total Cost of the Loan</Text>
                <Text style={styles.infoDetail}>• Principal + Interest + Fees = 5300</Text>
              </View>
            </View>
            <Text style={styles.sectionTitle}>Summary</Text>
            <View style={styles.infoItem}>
              <Icon name="account-balance-wallet" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Principal</Text>
                <Text style={styles.infoDetail}>• 5000</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="paid" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Total Paid Over Term</Text>
                <Text style={styles.infoDetail}>• 5150</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="money" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Origination Fee</Text>
                <Text style={styles.infoDetail}>• 150</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Icon name="attach-money" size={24} color={Colors.PrimaryColor} />
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Total Cost of Loan</Text>
                <Text style={styles.infoDetail}>• 5300</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    flex: 1,
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoDetail: {
    fontSize: 16,
  },
});

export default LoanCalModal;
