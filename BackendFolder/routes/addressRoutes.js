const express = require('express');
const { getAddresses, saveAddress, updateAddress, deleteAddress } = require('../controllers/addressController');
const router = express.Router();

router.get('/', getAddresses);
router.post('/', saveAddress);
router.put('/:id', updateAddress);
router.delete('/:id', deleteAddress);

module.exports = router;
