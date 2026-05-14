interface FieldsValueData {
  esconderFiltro?: boolean | undefined;
  esconderEdicao?: boolean | undefined;
  name: string;
  label: string;
  initialValue: string | number | boolean;
  type: string;
  wrapperCol: { span: number };
}

export default FieldsValueData;
