import React from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import TextArea from "./textarea";
import Input from "antd/es/input/Input";
import { UploadOutlined } from '@ant-design/icons';

export default function Cards() {
  return (
    <div className="w-11/12  items-center p-4 bg-white  border-gray-200 sm:p-6 md:p-8 dark:bg-white ">
      <h5 className="text-xl font-medium text-gray-400 dark:text-black">
        Status
      </h5>
      <form className="space-y-6 mr-3 " action="#">
        <Button style={{ width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: '#18d744' }} >
          Concluido:350
        </Button>
        <Button style={{ width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: '#FF8C00', }} >
          Enviado: 300
        </Button>
        <Button style={{ width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: 'blue' }} >
          Total: 600
        </Button>
        <Button style={{ width: '200px', height: '70px', marginRight: '10px', fontSize: 20, color: 'red' }} >
          Falha: 50
        </Button>
        <div>
          <p>Adicionar Número :</p>
          <Input placeholder="(65) 99951-5261" style={{ width: 200 }} ></Input>
          <Button style={{ color: '#18d744', margin: 10 }} >Adicionar</Button>

          <Button icon={<EyeOutlined />
          
          } ></Button>
          <div>
           <Button icon={<UploadOutlined />}>Adicione um arquivo</Button>
          </div>

        </div>

        <p>
          Texto que sera enviado no WhatsApp
        </p>
        <TextArea />
        <h5 className="text-xl font-medium text-gray-400 dark:text-black">
          Novo atendimento
        </h5>
        <div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Tipo de atendimento
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>informativo</option>
              <option value="">perguntas</option>
              <option value="">chat</option>
            </select>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Gatilho
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nome da empresa
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Nome da empresa"
            />
          </div>
        </div>
        <div>

          <Button style={{ width: '200px', height: '70px', marginRight: '10px', color: 'black', backgroundColor: '#18d744', fontSize: 20 }} >
            Start
          </Button>
          <Button style={{ width: '200px', height: '70px', marginRight: '10px', color: 'black', backgroundColor: 'yellow', fontSize: 20 }} >
            Pausar
          </Button>
        </div>
      </form>
    </div>
  );
}
