// libraries
import Image from 'next/image';
import { Breadcrumb } from 'antd';
import Title from 'antd/es/typography/Title';
// components
import { FeatureCard } from '@/app/platform/(components)/FeatureCard/FeatureCard.component';
import { ResourceControlComponent } from '@/app/platform/(components)/ResourceControl/ResourceControl.component';
// config
import { PLATFORM_BREADCRUMB_ITEMS } from '@/app/platform/page.config';
// styles
import './page.scss';

export default function PlatformPage() {
  return (
    <section className="platform__wrapper">
      <div className="platform__hero">
        <Breadcrumb
          className="platform__hero__breadcrumb"
          items={PLATFORM_BREADCRUMB_ITEMS}
          separator="/"
        />
        <div className="platform__hero__main">
          <div className="platform__hero__content">
            <Title level={3}>Virtuozzo Application Platform</Title>
            <p className="platform__hero__description">
              Облачная платформа нового поколения для Java, PHP, Ruby, Node.js,
              Python, Go приложений, а также Docker контейнеров.
            </p>
          </div>
          <Image
            className="platform__hero__image"
            src="/assets/hero-img.png"
            alt="Virtuozzo Platform"
            width={880}
            height={468}
            priority
          />
        </div>
      </div>
      <div className="platform__offset">
        <div className="platform__hero__features">
          <FeatureCard
            title="Автоматическое масштабирование"
            description="Увеличивайте ресурсы в моменты пиковой нагрузки и сокращайте их, когда они не нужны. Добавляйте новые ноды при достижении порогов. Удобное управление с минимальным ручным контролем."
          />
          <FeatureCard
            title="Маркетплейс готовых решений"
            description="Поддержка всех современных веб-серверов, языков программирования, баз данных, а также популярных кластеров (Kubernetes, MySQL, PostgreSQL, Mongo, Redis) и фреймворков."
          />
          <FeatureCard
            title="Удобный графический интерфейс"
            description="Дэшборд услуги позволяет быстро развернуть новое окружение или изменить параметры уже созданных контейнеров, проверить баланс и начисления, задеплоить из git, подключиться по ssh."
          />
        </div>
        <ResourceControlComponent />
      </div>
    </section>
  );
}
