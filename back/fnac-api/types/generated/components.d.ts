import type { Schema, Struct } from '@strapi/strapi';

export interface ProductsProductsInformation extends Struct.ComponentSchema {
  collectionName: 'components_products_products_informations';
  info: {
    displayName: 'Products information';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.Text;
    price: Schema.Attribute.Decimal;
  };
}

export interface StockStockInformation extends Struct.ComponentSchema {
  collectionName: 'components_stock_stock_informations';
  info: {
    displayName: 'Stock Information';
    icon: 'shirt';
  };
  attributes: {
    low_stock: Schema.Attribute.Integer;
    stock_quantity: Schema.Attribute.Integer;
  };
}

export interface TransactionsTransactionInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_transactions_transaction_informations';
  info: {
    displayName: 'Transaction Information';
    icon: 'shoppingCart';
  };
  attributes: {
    buyer_info: Schema.Attribute.Text;
    date: Schema.Attribute.DateTime;
    payment_status: Schema.Attribute.Enumeration<
      ['Paid', 'Refused', 'On hold']
    >;
    transaction_amount: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'products.products-information': ProductsProductsInformation;
      'stock.stock-information': StockStockInformation;
      'transactions.transaction-information': TransactionsTransactionInformation;
    }
  }
}
