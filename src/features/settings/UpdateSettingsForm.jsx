import Form from '../../ui/Form';
import formDetails from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSettings';

function UpdateSettingsForm() {
  const { FormRow, Label } = formDetails;
  const { isEditing, updateSettingApi } = useUpdateSetting();
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSettingApi({ [field]: value });
  }

  return (
    <Form>
      <FormRow>
        <Label htmlFor="minBookingLength">Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isLoading || isEditing}
          onBlur={(e) => {
            handleUpdate(e, 'minBookingLength');
          }}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="maxBookingLength">Maximum nightss/booking</Label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isLoading || isEditing}
          onBlur={(e) => {
            handleUpdate(e, 'maxBookingLength');
          }}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Label htmlFor="maxGuestsPerBooking">Maximum guests per booking</Label>
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isLoading || isEditing}
          onBlur={(e) => {
            handleUpdate(e, 'maxGuestsPerBooking');
          }}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Label htmlFor="breakfastPrice">Breakfast Price</Label>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isLoading || isEditing}
          onBlur={(e) => {
            handleUpdate(e, 'breakfastPrice');
          }}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
