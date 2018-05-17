import * as R from 'ramda';

const ramdaComplement = function () {
    const isNotEmpty = R.complement(R.isEmpty);

    return {
        isNotEmpty
    }
}

export default ramdaComplement();
