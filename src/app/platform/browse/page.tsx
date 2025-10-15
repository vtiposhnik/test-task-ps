'use client';

// libraries
import { Button, Modal, Segmented } from 'antd';
// components
import { useState } from 'react';
import { ResourceInput } from '@/components/form/ResourceInput/ResourceInput.component';
// static
import {
  cpuIcon,
  ramIcon,
  nvmeDiskIcon,
  archiveDiskIcon,
  ipAddressIcon,
  routerIcon,
  publicNetworkIcon,
} from '@/components/icons/formIcons';
// config
import {
  BROWSE_RESOURCES_INITIAL_STATE,
  calcluateBrowseTotal,
  PUBLIC_NETWORK_OPTIONS,
  ROUTER_OPTIONS,
} from '@/app/platform/browse/page.config';
import {
  PERIOD_OPTIONS,
  SELECT_INPUT_RESOURCE_PRICES,
} from '@/app/platform/page.config';
// styles
import './page.styles.scss';
// hooks
import { useToggleHook } from '@/shared/hooks/useToggle.hook';
// types
import {
  BrowseResourcesState,
  PublicNetwork,
  RouterType,
} from '@/app/platform/browse/page.types';
import { Period } from '@/app/platform/page.types';

export default function Browse() {
  const [isOrderModalOpen, toggleOrderModal] = useToggleHook();

  const [resources, setResources] = useState<BrowseResourcesState>(
    BROWSE_RESOURCES_INITIAL_STATE
  );

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
            onChange={(v) => handleChange('publicNetwork', v as PublicNetwork)}
            options={PUBLIC_NETWORK_OPTIONS}
            pricePerUnit={
              SELECT_INPUT_RESOURCE_PRICES.public[resources.publicNetwork]
            }
            unit="тг/мес"
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
          <ResourceInput
            name="router"
            iconSrc={routerIcon}
            label="Маршрутизатор"
            value={resources.router}
            onChange={(v) => handleChange('router', v as RouterType)}
            options={ROUTER_OPTIONS}
            pricePerUnit={SELECT_INPUT_RESOURCE_PRICES.router[resources.router]}
            unit="тг/мес"
            hasTooltip
          />
        </div>

        <div className="resources-browse__footer">
          <Button
            className="resources-browse__button"
            type="primary"
            size="large"
            htmlType="button"
            onClick={toggleOrderModal}
          >
            Заказать
          </Button>
          <div className="resources-browse__total">
            за <strong>{total}</strong> тг /{' '}
            {resources.period === Period.Hour ? 'час' : 'мес'}
          </div>
        </div>
      </form>

      <Modal
        open={isOrderModalOpen}
        onCancel={toggleOrderModal}
        onOk={toggleOrderModal}
      >
        Добавлено в корзину
      </Modal>
    </div>
  );
}
