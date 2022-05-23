import express from 'express';
import rescue from 'express-rescue';
import { validateZipCode, validateZipCodeBody } from '../middlewares';
import * as ZipCodeService from './../services/ZipCodeService';
import { STATUS_CODE } from './../utils/httpStatus';

const router = express.Router();

router.route('/:zipcode').get(
  validateZipCode,
  rescue(async (req, res, next) => {
    const { zipcode } = req.params;

    const response = await ZipCodeService.getZipCode(zipcode);

    if (response.error) {
      return next(response.error);
    }

    return res.status(STATUS_CODE.OK).json(response);
  })
);

router.route('/').post(
  validateZipCodeBody,
  rescue(async (req, res, next) => {
    const zipCodeBody = req.body;

    const response = await ZipCodeService.addZipCode(zipCodeBody);

    if (response.error) {
      return next(response.error);
    }

    return res.status(STATUS_CODE.CREATED).json(response);
  })
);

export default router;
