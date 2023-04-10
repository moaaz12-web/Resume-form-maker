export const generateCertificationFormRequest = () => ({ type: 'CERTIFICATION_FORM_REQUEST' });
export const generateCertificationFormSuccess = (CertificationFormdata) => ({ type: 'CERTIFICATION_FORM_SUCCESS', payload: CertificationFormdata });
export const generateCertificationFormFail = (error) => ({ type: 'CERTIFICATION_FORM_FAIL', payload: error });


export const CertificationAction = (val) => async (dispatch) => {
    dispatch(generateCertificationFormRequest());
    try {
      dispatch(generateCertificationFormSuccess(val));

    } catch (error) {
      dispatch(generateCertificationFormFail(error));
    }
    
  };