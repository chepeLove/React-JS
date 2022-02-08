import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import React from "react";


const maxLength = maxLengthCreator(10)

type PropsType = {

}
export type AddPostFormValuesType={
    newPostText:string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm:React.FC<InjectedFormProps<AddPostFormValuesType,PropsType>&PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Your post", "newPostText", [required], Input)}
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType,PropsType>({
    form: "profile-add-post"
})(AddNewPostForm)