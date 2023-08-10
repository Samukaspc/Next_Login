import { CheckOutlined } from "@ant-design/icons";
import TextArea from "./textarea";
import { UploadOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import type { UploadChangeParam } from 'antd/es/upload';
import { message, Button, Card, Statistic, Row, Col, Modal, Table } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

import { useState } from 'react';
import Image from 'next/image';
import { Upload } from 'antd';
import { ok } from "assert";

export default function Cards() {
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      celular: '(65) 964544-4552',
    },
    {
      key: '2',
      name: 'John',
      celular: '(65) 95454-5825',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Celular',
      dataIndex: 'celular',
      key: 'celular',
    },
    {
      title: 'Ações',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Imagen</div>
    </div>
  );

  return (
    <div className="w-11/12  items-center p-4 bg-white  border-gray-200 sm:p-6 md:p-1 dark:bg-white ">
        <div className="bg-[#f5f5f5]  mb-5 p-5 rounded " >
          <h5 className="text-xl font-medium text-gray-400 dark:text-black mb-5  " >
            Status Mensagem :
          </h5>

          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Concluido:"
                  value={30}
                  style={{ fontWeight: 'bold' }}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<CheckOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Enviando..."
                  value={5}
                  style={{ fontWeight: 'bold' }}
                  precision={2}
                  valueStyle={{ color: '#FF8C00' }}
                  prefix={<ArrowUpOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Falha:"
                  value={9.3}
                  precision={2}
                  style={{ fontWeight: 'bold' }}

                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title=" Total:"
                  style={{ fontWeight: 'bold' }}
                  value={500}
                  precision={2}
                  valueStyle={{ color: 'blue' }}
                />
              </Card>
            </Col>
            <Col span={12}>
            </Col>
          </Row>

          {/* <div className="w-full flex justify-center " >
            <Button style={{ backgroundColor: 'white', boxShadow: '5px 4px 5px gray', width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: '#18d744' }} >
              Concluido:350
            </Button>
            <Button style={{ backgroundColor: 'white', boxShadow: '5px 4px 5px gray', width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: '#FF8C00', }} >
              Enviado: 300
            </Button>
            <Button style={{ backgroundColor: 'white', boxShadow: '5px 4px 5px gray', width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: 'blue' }} >
              Total: 600
              </Button>
            <Button style={{ backgroundColor: 'white', boxShadow: '5px 4px 5px gray', width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: 'red' }} >
              Falha: 50
              </Button>
            </div> */}
        </div>
        <div className="bg-[#f5f5f5] p-5 rounded  mb-5 " >
          <div>
            <div  >
              <div className="w-full flex mb-6 ">
                <h5 className="text-xl font-medium text-gray-400 dark:text-black" >Informe o contato:</h5>
              </div>
              <div className="flex" >
                <div className="mr-3" >
                  <p>Nome:</p>
                  <input type="text" placeholder=" Marcos Santos" style={{ padding: '3px', borderWidth: '1px', borderRadius: '5px' }} />
                </div>
                <div className="mr-3" >
                  <p>Número:</p>
                  <input type="text" placeholder="(65) 99951-5261" style={{ width: 200, padding: '3px', borderWidth: '1px', borderRadius: '5px' }} />
                </div  >
                <div className="mt-6" >
                  <Button style={{ color: '#18d744', backgroundColor: 'white' }} >Adicionar</Button>
                </div>
                <div className="flex w-full justify-end" >
                  <Button className="bg-white mt-6 text-blue-600 " type="primary"  onClick={showModal} >
                    Vizualizar Numero
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5" >

            <div  >
              <p>Arquivo:</p>
              <Upload {...props}>
                <Button style={{ marginTop: 10, backgroundColor: 'white', width: '180px', height: '60px' }} icon={<UploadOutlined />}>Arquivo Exel</Button>
              </Upload>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5]  rounded p-5 " >
          <h5 className="text-xl font-medium text-gray-400 dark:text-black mb-5 " >
            Monte sua mensagem
          </h5>
          <div className="w-12/12" >
            <p>
              Texto que sera enviado no WhatsApp
            </p>
            <TextArea />
          </div>
          <div  >
            <p>Envie sua imagem:</p>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <Image src={imageUrl} alt="avatar" layout="fill" objectFit="cover" />
                </div>
              ) : (
                uploadButton
                )}
            </Upload>
          </div>
          <div className="flex w-full justify-center  " >
            <Button style={{ width: '200px', height: '70px', marginRight: '10px', color: 'black', backgroundColor: '#18d744', fontSize: 20 }} >
              Start
            </Button>
            <Button style={{ width: '200px', height: '70px', marginRight: '10px', color: 'black', backgroundColor: 'yellow', fontSize: 20 }} >
              Pausar
            </Button>
          </div>
          <>
            <Modal title="Número(s)" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Table dataSource={dataSource} columns={columns}  pagination={false} />;
            </Modal>
          </>
        </div>

    </div>
  );
}
