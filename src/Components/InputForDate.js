import React, { useState } from 'react';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function InputForDate({
  label,
  placeholder,
  secureTextEntry,
  rightIcon,
  onPress,
  inputStyle,
  onChangeText = () => {},
  isDate,
  ...props
}) {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    hideDatePicker();
    onChangeText(date); 
  };

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : placeholder; 

  return (
    <View style={styles.inputStyle} {...inputStyle}>
      <Text>{label}</Text>
      <View style={styles.inputViewStyle}>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            placeholder={formattedDate}
            style={styles.inlinestyle}
            editable={false}
            {...props}
          />
        </TouchableOpacity>
        {rightIcon && (
          <TouchableOpacity onPress={onPress}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={handleDateChange}
        onCancel={hideDatePicker}
        mode="date" 
      date={new Date()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderRadius: moderateScale(4),
    marginBottom: moderateVerticalScale(30),
  },
  inlinestyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(13),
  },
  inputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
