let addresses = []; // Mock data

exports.getAddresses = (req, res) => res.json(addresses);

exports.saveAddress = (req, res) => {
  addresses.push(req.body);
  res.status(201).json({ message: 'Address saved!' });
};

exports.updateAddress = (req, res) => {
  const { id } = req.params;
  addresses = addresses.map((addr, index) => (index === parseInt(id) ? req.body : addr));
  res.json({ message: 'Address updated!' });
};

exports.deleteAddress = (req, res) => {
  const { id } = req.params;
  addresses = addresses.filter((_, index) => index !== parseInt(id));
  res.json({ message: 'Address deleted!' });
};
