'use strict'

import * as R from 'ramda';
import RC from '../utilities/ramdaComplement';

const validation = function (spec) {
    const {
        fieldValidators = []
    } = spec || {};

    const validators = {
        none (value) {
            return true;
        },

        isNumber (value) {
            return R.is(Number, parseFloat(value));
        },

        isNotEmpty (value) {
            return RC.isNotEmpty(value);
        }
    };

    const validate = function (value) {
        return R.reduce(
            (acc, curr) => R.append(validators[curr](value), acc), [], fieldValidators
        );
    };

    return {
        validate
    }
}

export default validation;
