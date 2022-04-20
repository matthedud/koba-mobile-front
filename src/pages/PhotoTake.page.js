import { message, Modal, Upload } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonFoorterGroupe from "../components/buttons/ButtonFoorterGroupe"
import ReturnButton from "../components/buttons/ReturnButton"
import SubmitButton from "../components/buttons/SubmitButton"
import Card from "../components/Card"
import SelectInput from "../components/inputs/SelectInput"
import TextAreaInput from "../components/inputs/TextAreaInput"
import { AuthContext } from "../context/AuthContext"
import { FormContext } from "../context/FormContext"
import { LoadingContext } from "../context/LoadingContext"
import { PlusOutlined } from '@ant-design/icons';

const PhotoTake = () => {
  const navigate = useNavigate()
  const { form, onChange, setForm } = useContext(FormContext)
  const { getRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [chantiers, setChantiers] = useState([])

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleCancel = () => this.setState({ previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    // this.setState({
    //   previewImage: file.url || file.preview,
    //   previewVisible: true,
    //   previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    // });
  };

  const handleChange = ({ fileList }) => this.setState({ fileList });


  useEffect(() => {
    const getChantier = async () => {
      setLoading(true)
      try {
        const chantierData = await getRequest(`/chantiers`)
        if (chantierData?.data) setChantiers(chantierData.data)
      } catch (err) {
        message.error("erreur de connexion")
        console.log({ err })
      }
      setLoading(false)
    }
    getChantier()
  }, [])

  // const { previewVisible, previewImage, fileList, previewTitle } = this.state;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
   


  const handleSubmit = () => {
    setForm({})
    message.info('photo sauvegardée')
    navigate("/")
  }

  const handleReturn = () => {
    setForm({})
    navigate("/")
  }


  return (
    <>
    <h1>Prendre une Photo</h1>
      <Card>
        <label htmlFor="chantier">
          Chantier:
          <SelectInput
            name="chantier"
            value={form.chantier}
            placeholder="Chantier"
            onChange={onChange}
            options={chantiers}
          />
        </label>
        {form.chantier ? (
          <label htmlFor="poste">
            Poste:
            <SelectInput
              name="poste"
              value={form.poste}
              placeholder="poste"
              onChange={onChange}
              options={form.chantier?.poste}
              isMulti
            />
          </label>
        ) : null}
        <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={form.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {form.fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={form.previewVisible}
        title={form.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={form.previewImage} />
      </Modal>
    </>
        <label htmlFor="salarie">
          Commentaire:
          <TextAreaInput
          name="commentaire"
          value={form.commentaire}
          placeholder="Commentaire"
          onChange={onChange}
        />
        </label>
      </Card>
      <ButtonFoorterGroupe>
        <ReturnButton onClick={handleReturn} />
        <SubmitButton onClick={handleSubmit} />
      </ButtonFoorterGroupe>
    </>
  )
}

export default PhotoTake
