const messages = {
  "auth/email-already-in-use": "Бул email менен катталган колдонуучу бар",
  "auth/invalid-email": "Email туура эмес жазылган",
  "auth/weak-password": "Сырсөз кеминде 6 белгиден турушу керек",
  "auth/invalid-credential": "Email же сырсөз туура эмес",
  "auth/too-many-requests": "Аракет өтө көп болду. Бир аздан кийин кайталаңыз",
  "auth/popup-closed-by-user": "Google терезеси жабылып калды",
};
 
export function getErrorMessage(code) {
  return messages[code] || "Ката кетти. Кайра аракет кылыңыз";
}