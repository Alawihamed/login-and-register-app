import {
  InputGroupContainer,
  InputLabel,
  Input,
  Error
} from "./styledComponent";

function InputGroup({ label, type="text", placeholder,value,setValue,error="" }) {
  return (
    <InputGroupContainer>
      <InputLabel>{label}</InputLabel>
      <Input type={type} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Error>{error}</Error>
    </InputGroupContainer>
  );
}
export default InputGroup;
