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
import { PlusOutlined } from "@ant-design/icons"

const PhotoTake = () => {
  const navigate = useNavigate()
  const { form, onChange, setForm } = useContext(FormContext)
  const { getRequest, postRequest } = useContext(AuthContext)
  const { setLoading } = useContext(LoadingContext)
  const [chantiers, setChantiers] = useState([])
  const [previewSource, setPreviewSource] = useState([])
  const [photoState, setPhotoState] = useState([])


  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleCancel = () => setPreviewSource({...previewSource, previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewSource({
    previewImage: file.url || file.preview,
    previewVisible: true,
    previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
  });
  };

  const handleChange = ({ fileList }) => setPhotoState({ fileList });

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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  const handleSubmit = async () => {
    setLoading(true)
    if (!form.chantier) {
      message.error("choisir un chantier")
      return
    }

    if (!photoState.fileList) {
      message.error("choisir un chantier")
      return
    }
    try {
      let poste = []
      if (form.poste) {
        poste = form.poste.map((el) => el._id)
      }
      const image = []
      for(const photo of photoState.fileList){
        const b64 = await getBase64(photo.originFileObj)
        image.push(b64)
      }
      await postRequest("/upload", {
        image,
        chantier: form.chantier._id,
        poste,
        commentaire: form.commentiare,
      })
      navigate("/")
      setForm({})
      message.info("photo sauvegardée")
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleReturn = () => {
    setForm({})
    navigate("/")
  }

  return (
    <>
      <h1>Ajouter une Photo</h1>
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
        fileList={photoState.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {photoState.fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewSource.previewVisible}
        title={previewSource.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewSource.previewImage} />
      </Modal>
    </>
        {/* <input type="file" name="image" onChange={handleFile} /> */}
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
