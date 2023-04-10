export const generateProjectsFormRequest = () => ({ type: 'PROJECTS_FORM_REQUEST' });
export const generateProjectsFormSuccess = (ProjectsFormdata) => ({ type: 'PROJECTS_FORM_SUCCESS', payload: ProjectsFormdata });
export const generateProjectsFormFail = (error) => ({ type: 'PROJECTS_FORM_FAIL', payload: error });


export const ProjectsAction = (val) => async (dispatch) => {
    dispatch(generateProjectsFormRequest());
    try {
      dispatch(generateProjectsFormSuccess(val));

    } catch (error) {
      dispatch(generateProjectsFormFail(error));
    }
    
  };