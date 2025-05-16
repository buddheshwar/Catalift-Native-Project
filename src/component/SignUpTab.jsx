import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const SignUpTab = () => {

  const navigation = useNavigation();
  const handleSubmit = () => {

  }

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

  const [langOpen, setLangOpen] = useState(false);
  const [langValue, setLangValue] = useState(null);
  const [langItems, setLangItems] = useState([
    { label: 'English', value: 'english' },
    { label: 'Hindi', value: 'hindi' },
    { label: 'Other', value: 'other' },
  ]);

  const [dayOpen, setDayOpen] = useState(false);
  const [dayValue, setDayValue] = useState(null);
  const [dayItems, setDayItems] = useState([...Array(31)].map((_, i) => ({ label: `${i + 1}`, value: `${i + 1}` })));

  const [monthOpen, setMonthOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [monthItems, setMonthItems] = useState([...Array(12)].map((_, i) => ({ label: `${i + 1}`, value: `${i + 1}` })));

  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [yearItems, setYearItems] = useState(
    [...Array(100)].map((_, i) => {
      const year = 2025 - i;
      return { label: `${year}`, value: `${year}` };
    })
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.heading}>Your Personal Details</Text>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <FormLabel text="Full Name *" />
        <TextInput style={styles.input} placeholder="Full Name" />

        <FormLabel text="Student ID" />
        <TextInput style={styles.input} placeholder="Student ID" keyboardType="number-pad" />

        <FormLabel text="DOB *" />
        <View style={styles.dobContainer}>
          <View style={{ flex: 1, zIndex: 3000, marginRight: 6 }}>
            <DropDownPicker
              placeholder="DD"
              open={dayOpen}
              value={dayValue}
              items={dayItems}
              setOpen={(open) => {
                setDayOpen(open);
                setMonthOpen(false);
                setYearOpen(false);
              }}
              setValue={setDayValue}
              setItems={setDayItems}
              style={styles.dropdownSmall}
            />
          </View>

          <View style={{ flex: 1, zIndex: 2000, marginRight: 6 }}>
            <DropDownPicker
              placeholder="MM"
              open={monthOpen}
              value={monthValue}
              items={monthItems}
              setOpen={(open) => {
                setMonthOpen(open);
                setDayOpen(false);
                setYearOpen(false);
              }}
              setValue={setMonthValue}
              setItems={setMonthItems}
              style={styles.dropdownSmall}
            />
          </View>

          <View style={{ flex: 1, zIndex: 1000 }}>
            <DropDownPicker
              placeholder="YYYY"
              open={yearOpen}
              value={yearValue}
              items={yearItems}
              setOpen={(open) => {
                setYearOpen(open);
                setDayOpen(false);
                setMonthOpen(false);
              }}
              setValue={setYearValue}
              setItems={setYearItems}
              style={styles.dropdownSmall}
            />
          </View>
        </View>



        <View style={{ zIndex: 900 }}>
          <FormLabel text="Mother Tongue *" />
          <DropDownPicker
            open={langOpen}
            value={langValue}
            items={langItems}
            setOpen={(open) => {
              setLangOpen(open);
              setGenderOpen(false);
              setDayOpen(false);
              setMonthOpen(false);
              setYearOpen(false);
            }}
            setValue={setLangValue}
            setItems={setLangItems}
            style={styles.dropdown}
            placeholder='Select Your Language'
          />
        </View>

        <View style={{ zIndex: 800 }}>
          <FormLabel text="Gender *" />
          <DropDownPicker
            open={genderOpen}
            value={genderValue}
            items={genderItems}
            setOpen={(open) => {
              setGenderOpen(open);
              setLangOpen(false);
              setDayOpen(false);
              setMonthOpen(false);
              setYearOpen(false);

            }}
            setValue={setGenderValue}
            setItems={setGenderItems}
            style={styles.dropdown}
            placeholder='Gender'
          />
        </View>


        <FormLabel text="Phone Number *" />
        <TextInput style={styles.input} keyboardType="phone-pad" placeholder='Phone Number' />

        <FormLabel text="Email Address *" />
        <TextInput style={styles.input} keyboardType="email-address" placeholder='Email Address' />

        <FormLabel text="LinkedIn" />
        <TextInput style={styles.input} placeholder='LinkedIn' />
        <View>
          <TouchableOpacity style={[styles.btnSignUp]} onPress={handleSubmit}>
            <Text style={[styles.btnText]}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInTab}>
          <Text style={[styles.signInText]}>Already Have An Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={[styles.color, styles.underline, styles.signInBtn]}>Log-In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FormLabel = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  progressBarContainer: {
    height: 10,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#eee',
    marginBottom: 20,
  },
  progressBar: {
    width: '25%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'rgb(2, 2, 114)',
  },
  heading: {
    fontSize: 24,
    color: 'rgb(2, 2, 114)',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 12,
    color: 'rgb(2, 2, 114)',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
    fontSize: 14,
  },
  dropdown: {
    marginTop: 6,
    borderRadius: 8,
    borderColor: '#d6d6d6',
  },
  dropdownSmall: {
    borderRadius: 8,
    borderColor: '#d6d6d6',
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 6,
  },
  btnSignUp: {
    backgroundColor: 'rgb(2, 2, 114)',
    padding: 12,
    marginTop: 10,
    borderRadius: 12
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center'
  },
  signInTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  signInText: {
    opacity: 0.3,
    fontSize: 15,
    fontWeight: '500',
    paddingRight: 10
  },
  signInBtn: {
    fontSize: 18,
    fontWeight: '500'
  },
  color: {
    color: 'rgb(2, 2, 114)',
  },
  underline: {
    textDecorationLine: 'underline'
  },

});

export default SignUpTab;
