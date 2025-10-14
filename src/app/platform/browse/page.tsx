'use client';

import { Button, Modal, Segmented } from 'antd';
import { useState } from 'react';
import { ResourceInput } from '@/components/form/ResourceInput/ResourceInput.component';
import './page.styles.scss';
import {
  cpuIcon,
  ramIcon,
  nvmeDiskIcon,
  archiveDiskIcon,
  ipAddressIcon,
  routerIcon,
  publicNetworkIcon,
} from '@/components/icons/formIcons';
import { BrowseResourcesState, Period } from '@/app/platform/browse/page.types';
import {
  BROWSE_RESOURCES_INITIAL_STATE,
  calcluateBrowseTotal,
  PUBLIC_NETWORK_OPTIONS,
  ROUTER_OPTIONS,
} from '@/app/platform/browse/page.config';

const PERIOD_OPTIONS = [
  { label: 'в час', value: 'hour' },
  { label: 'в месяц', value: 'month' },
];

export default function Browse() {
  const [resources, setResources] = useState<BrowseResourcesState>(
    BROWSE_RESOURCES_INITIAL_STATE
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = <K extends keyof BrowseResourcesState>(
    key: K,
    value: BrowseResourcesState[K]
  ) => {
    setResources((prev) => ({ ...prev, [key]: value }));
  };

  const total = calcluateBrowseTotal(resources);

  return (
    <div className="resources-browse">
      <form
        className="resources-browse__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="resources-browse__header">
          <h2 className="resources-browse__title">
            Ресурсы вашего облака Virtuozzo PaaS
          </h2>
          <Segmented
            options={PERIOD_OPTIONS}
            value={resources.period}
            onChange={(value) => handleChange('period', value as Period)}
          />
        </div>

        <div className="resources-browse__grid">
          <ResourceInput
            name="cpuCores"
            iconSrc={cpuIcon}
            label="Ядра процессора"
            value={resources.cpuCores}
            onChange={(v) => handleChange('cpuCores', v)}
            pricePerUnit={1900}
            unit="тг за ядро/мес"
          />
          <ResourceInput
            name="ram"
            iconSrc={ramIcon}
            label="Оперативная память, ГБ"
            value={resources.ram}
            onChange={(v) => handleChange('ram', v)}
            pricePerUnit={5200}
            unit="тг за ГБ/мес"
          />
          <ResourceInput
            name="nvmeDisk"
            iconSrc={nvmeDiskIcon}
            label="Быстрый диск NVME, ГБ"
            value={resources.nvmeDisk}
            onChange={(v) => handleChange('nvmeDisk', v)}
            pricePerUnit={160}
            unit="тг за ГБ/мес"
            hasTooltip
          />
          <ResourceInput
            name="archiveDisk"
            iconSrc={archiveDiskIcon}
            label="Архивный диск, ГБ"
            value={resources.archiveDisk}
            onChange={(v) => handleChange('archiveDisk', v)}
            pricePerUnit={10}
            unit="тг за ГБ/мес"
            hasTooltip
          />
          <ResourceInput
            name="publicNetwork"
            iconSrc={publicNetworkIcon}
            label="Публичная сеть"
            value={resources.publicNetwork}
            onChange={(v) => handleChange('publicNetwork', v)}
            options={PUBLIC_NETWORK_OPTIONS}
          />
          <ResourceInput
            name="router"
            iconSrc={routerIcon}
            label="Маршрутизатор"
            value={resources.router}
            onChange={(v) => handleChange('router', v)}
            options={ROUTER_OPTIONS}
            hasTooltip
          />
          <ResourceInput
            name="routedIp"
            iconSrc={ipAddressIcon}
            label="Маршрутизируемые IP-адреса"
            value={resources.routedIp}
            onChange={(v) => handleChange('routedIp', v)}
            pricePerUnit={1000}
            unit="тг за адрес/мес"
            hasTooltip
          />
        </div>

        <div className="resources-browse__footer">
          <Button
            className="resources-browse__button"
            type="primary"
            size="large"
            htmlType="button"
            onClick={() => setIsModalOpen(true)}
          >
            Заказать
          </Button>
          <div className="resources-browse__total">
            за <strong>{total}</strong> тг /{' '}
            {resources.period === 'hour' ? 'час' : 'месяц'}
          </div>
        </div>
      </form>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      >
        Добавлено в корзину
      </Modal>
    </div>
  );
}
