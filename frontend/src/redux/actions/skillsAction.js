export const generateSkillsFormRequest = () => ({ type: 'SKILLS_FORM_REQUEST' });
export const generateSkillsFormSuccess = (SkillsFormdata) => ({ type: 'SKILLS_FORM_SUCCESS', payload: SkillsFormdata });
export const generateSkillsFormFail = (error) => ({ type: 'SKILLS_FORM_FAIL', payload: error });


export const SkillsAction = (val) => async (dispatch) => {
    dispatch(generateSkillsFormRequest());
    try {
      dispatch(generateSkillsFormSuccess(val));

    } catch (error) {
      dispatch(generateSkillsFormFail(error));
    }
    
  };