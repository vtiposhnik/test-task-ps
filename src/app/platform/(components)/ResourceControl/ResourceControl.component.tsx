'use client';

import { Button, Modal, Segmented } from 'antd';
import { useState } from 'react';
import { ResourceInput } from '@/components/form/ResourceInput/ResourceInput.component';
import './ResourceControl.styles.scss';
import {
  diskSpaceIcon,
  dynamicCloudletsIcon,
  ipAddressIcon,
  reservedCloudletsIcon,
} from '@/components/icons/formIcons';
import {
  calculateTotal,
  RESOURCES_INITIAL_STATE,
} from '@/app/platform/(components)/ResourceControl/ResourceControl.config';
import { ResourcesState } from '@/app/platform/(components)/ResourceControl/ResourceControl.types';

const PERIOD_OPTIONS = [
  { label: 'в час', value: 'hour' },
  { label: 'в месяц', value: 'month' },
];

export const ResourceControlComponent = () => {
  const [resources, setResources] = useState<ResourcesState>(
    RESOURCES_INITIAL_STATE
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    key: keyof typeof resources,
    value: number | string
  ) => {
    setResources((prev) => ({ ...prev, [key]: value }));
  };

  const total = calculateTotal(resources);

  return (
    <div className="resources">
      <p className="resources__heading">
        В стоимость включены входящий и исходящий трафик, а также подключение
        SSL-сертификата
      </p>

      <form className="resources__form" onSubmit={(e) => e.preventDefault()}>
        <div className="resources__header">
          <h2 className="resources__title">
            Ресурсы вашего облака Virtuozzo PaaS
          </h2>
          <Segmented
            options={PERIOD_OPTIONS}
            value={resources.period}
            onChange={(value) => handleChange('period', value)}
          />
        </div>

        <div className="resources__grid">
          <ResourceInput
            name="reservedCloudlets"
            iconSrc={reservedCloudletsIcon}
            label="Зарезервированные клаудлеты, шт"
            value={resources.reservedCloudlets}
            onChange={(v) => handleChange('reservedCloudlets', v)}
            pricePerUnit={1.5}
            unit="шт/час"
          />
          <ResourceInput
            name="dynamicCloudlets"
            iconSrc={dynamicCloudletsIcon}
            label="Динамические клаудлеты, шт"
            value={resources.dynamicCloudlets}
            onChange={(v) => handleChange('dynamicCloudlets', v)}
            pricePerUnit={1.75}
            unit="шт/час"
          />
          <ResourceInput
            name="diskSpace"
            iconSrc={diskSpaceIcon}
            label="Дисковое пространство, ГБ"
            value={resources.diskSpace}
            onChange={(v) => handleChange('diskSpace', v)}
            pricePerUnit={0.15}
            unit="ГБ/час"
          />
          <ResourceInput
            name="dedicatedIp"
            iconSrc={ipAddressIcon}
            label="Выделенный IP-адрес"
            value={resources.dedicatedIp}
            onChange={(v) => handleChange('dedicatedIp', v)}
            pricePerUnit={2.75}
            unit="адрес/час"
            hasTooltip
          />
        </div>

        <div className="resources__footer">
          <Button
            type="primary"
            size="large"
            htmlType="button"
            onClick={() => setIsModalOpen(true)}
          >
            Заказать
          </Button>
          <div className="resources__total">
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
};
