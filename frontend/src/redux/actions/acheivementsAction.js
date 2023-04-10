export const generateAcheivementFormRequest = () => ({ type: 'ACHEIVEMENT_FORM_REQUEST' });
export const generateAcheivementFormSuccess = (AcheivementFormdata) => ({ type: 'ACHEIVEMENT_FORM_SUCCESS', payload: AcheivementFormdata });
export const generateAcheivementFormFail = (error) => ({ type: 'ACHEIVEMENT_FORM_FAIL', payload: error });


export const AcheivementAction = (val) => async (dispatch) => {
    dispatch(generateAcheivementFormRequest());
    try {
      dispatch(generateAcheivementFormSuccess(val));

    } catch (error) {
      dispatch(generateAcheivementFormFail(error));
    }
    
  };