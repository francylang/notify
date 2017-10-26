const phoneNums = (dummyPhoneNums) => {
  return dummyPhoneNums.map(num => {
    return {
      student: num.student,
      phone: num.phone,
    });
  });
};


export default phoneNums;
