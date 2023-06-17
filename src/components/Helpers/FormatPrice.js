const FormatPrice = ({ price }) => {
  return Intl.NumberFormat(
    "en-IN", //intl.NumberFormat() -> this is a awesome function of javasvript which gives the functionality of number system and currency
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }
  ).format(price / 100);
};

export default FormatPrice;
