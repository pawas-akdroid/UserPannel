import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginFileEncode)
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import {  TokenUrl } from '../../Utilities/Urls';
import { Button, Grid, PasswordInput } from '@mantine/core';
import { ErrorHandler, ErrorNotification, SuccessNotification } from '../../components/NotificationProvider';
import { Title } from '../../components/Header';

function UpdateProfile() {
  const [files, setFiles] = useState("")
  const [user, setUser] = useState("")
  const [image, setImage] = useState("")
  // User Data 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  // Merchant Data 
  const [parent_company, setParentCompany] = useState("")
  const [store_address, setStoreAddress] = useState("")
  const [store_phone, setStorePhone] = useState("")
  const [pan_number, setPanNumber] = useState("")
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    TokenUrl().get("/profile").then(res => {
      setImage(res?.data?.data?.image)
      setName(res?.data?.data?.name)
      setEmail(res?.data?.data?.email)
      setPhone(res?.data?.data?.phone)
      Title(res.data.data?.name)
      setRefresh(false)
    }).catch((err) => {
      ErrorHandler(err)
    })
  }, [])

  const handleUserUpdate = (e) => {
    e.preventDefault()
    TokenUrl().put("/profile", {"name":name, "email":email}).then(res=>{
      SuccessNotification({title:"Succeed!", message:"Your user Credential has been updated."})
      setRefresh(true)
    }).catch(err=>{
      console.log(err?.response?.data)
      ErrorHandler(err)
    })
  }
 
  
  const handleImageUpdate = (e) => {
    e.preventDefault()
    MerchantTokenUrl().put("/image", {"image":image}).then(res=>{
      setRefresh(true)
      SuccessNotification({title:"Succeed!", message:"Your image has been updated."})

    }).catch(err=>{
      ErrorHandler(err)
    })
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    TokenUrl().post('/change-password', { "new_password": newPassword, "password": password }).then(res => {
      SuccessNotification({ title: "Success!", message: "Password has been changed." })
    }).catch(err => {
      if (err?.response?.status === 406) {
        ErrorNotification({ title: "Error!", message: err?.response?.data?.error })
      }
      else {
        ErrorHandler(err)
      }
    })
  }
  return (

    <div className="m-2 md:m-10 mt-5 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl h-full">
      <Header category="Profile" title={`${name}`} />

      <div className=" md:mt-0 md:col-span-2 dark:bg-secondary-dark-bg">

        <div className=" sm:rounded-md sm:overflow-hidden dark:bg-secondary-dark-bg">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6 dark:bg-secondary-dark-bg">
            <div>
              <label className="block text-sm font-medium text-gray-700 ml-3 dark:bg-secondary-dark-bg dark:text-gray-200">Photo</label>
              <div className="mt-1 items-center ml-3 dark:bg-secondary-dark-bg">
                {user.image !== null ? <>
                  <Grid grow>
                    <Grid.Col sm={3}>
                      <img className='inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100 dark:bg-secondary-dark-bg text-center'
                        src={`${"ImgUrl2"}${image}`} />

                    </Grid.Col>
                    <Grid.Col sm={9}>
                      <Grid.Col sm={12}>
                        <Grid.Col sm={6}>
                          <FilePond files={files} onupdatefiles={setFiles} name='image'
                            maxParallelUploads={1} allowBrowse={true} allowDrop={true}
                            allowImageCrop={true} allowImagePreview={true}
                            imageTransformClientTransforms={'crop'} credits={false}
                            onaddfile={(err, item) => {
                              if (err) return console.log(err)
                              const base64 = item.getFileEncodeBase64String()
                              setImage(base64)
                            }}
                            allowFileTypeValidation={true} acceptedFileTypes={['image/*']}
                          />
                        </Grid.Col>
                        <Grid.Col sm={3}>
                          <Button variant={"outline"} onClick={handleImageUpdate} className='ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'> Update Image </Button>

                        </Grid.Col>
                      </Grid.Col>
                    </Grid.Col>
                  </Grid>
                </>
                  : <>
                    <FilePond files={files} onupdatefiles={setFiles} name='image'
                      maxParallelUploads={1} allowBrowse={true} allowDrop={true}
                      allowImageCrop={true} allowImagePreview={true}
                      imageTransformClientTransforms={'crop'} credits={false}
                      onaddfile={(err, item) => {
                        if (err) return console.log(err)
                        const base64 = item.getFileEncodeBase64String()
                        setImage(base64)
                      }}
                      allowFileTypeValidation={true} acceptedFileTypes={['image/*']}
                    />
                          <Button variant={"outline"} onClick={handleImageUpdate} className='ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'> Update Image </Button>

                  </>
                }

              </div>
            </div>
            <div>
              Update User Credential Information
            </div>
            <form onSubmit={handleUserUpdate}>
              <Grid grow>
                <Grid.Col span={6}>
                  <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                    Name
                  </h2>

                  <input
                    className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" value={name} onChange={((e) => setName(e.target.value))}
                  />

                </Grid.Col>
                <Grid.Col span={6}>
                  <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                    Email
                  </h2>
                  <input
                    className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" value={email} onChange={((e) => setEmail(e.target.value))}

                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                    Phone <small>(Uneditable)</small>
                  </h2>
                  <input
                    className="ml-5 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly type="text" value={phone} 
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Button variant='outline' type={"submit"}
                    className="ml-5 mt-6 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  >Update Credential
                  </Button>
                </Grid.Col>
              </Grid>
            </form>
            <div>
              Update Password
            </div>
            <form onSubmit={handleUpdatePassword}>
              <Grid grow>
                <Grid.Col span={4}>
                  <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                    Old Password
                  </h2>
                  <PasswordInput
                    className="ml-5 justify-between shadow appearance-none border rounded w-11/12  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Old Password"
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                    New Password
                  </h2>
                  <PasswordInput
                    className="ml-5 justify-between shadow appearance-none border rounded w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <Button variant='outline' type='submit'
                    className="ml-5 mt-6 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  >Update Pasword
                  </Button>
                </Grid.Col>
              </Grid>
            </form>
            
          </div>

        </div>
      </div>





    </div>
  )
}

export default UpdateProfile;