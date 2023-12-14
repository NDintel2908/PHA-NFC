<template>
    <div class="track-and-trace">
      <div class="header">
        <h1>Track & Trace</h1>
      </div>
      <div class="content">
        <div class="shipments">
          <ul>
            <li v-for="shipment in shipments" :key="shipment.id">
              <div class="shipment-info">
                <h2>{{ shipment.tracking_number }}</h2>
                <p>{{ shipment.status }}</p>
                <p>{{ shipment.carrier }}</p>
                <p>{{ shipment.origin }}</p>
                <p>{{ shipment.destination }}</p>
              </div>
              <div class="shipment-history">
                <ul>
                  <li v-for="event in shipment.events" :key="event.id">
                    <p>{{ event.date_time }}</p>
                    <p>{{ event.location }}</p>
                    <p>{{ event.description }}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TrackAndTrace",
    data() {
      return {
        shipments: [
          {
            id: 1,
            tracking_number: "54908545353",
            status: "Đang vận chuyển",
            carrier: "DHL",
            origin: "Hà Nội",
            destination: "Hồ Chí Minh",
            events: [
              {
                date_time: "2023-12-12 15:55:00",
                location: "Hà Nội",
                description: "Đơn hàng được tạo",
              },
              {
                date_time: "2023-12-13 10:00:00",
                location: "Hồ Chí Minh",
                description: "Đơn hàng đến kho của nhà vận chuyển",
              },
            ],
          },
          {
            id: 2,
            tracking_number: "117-12345675",
            status: "Đã giao",
            carrier: "Air Cargo",
            origin: "Thái Lan",
            destination: "Hồ Chí Minh",
            events: [
              {
                date_time: "2023-12-10 10:00:00",
                location: "Thái Lan",
                description: "Đơn hàng được tạo",
              },
              {
                date_time: "2023-12-12 12:00:00",
                location: "Hồ Chí Minh",
                description: "Đơn hàng đến kho của nhà vận chuyển",
              },
              {
                date_time: "2023-12-12 15:00:00",
                location: "Hồ Chí Minh",
                description: "Đơn hàng được giao cho người nhận",
              },
            ],
          },
          {
            id: 3,
            tracking_number: "ABCU1234567",
            status: "Đã hủy",
            carrier: "Container",
            origin: "Quảng Ninh",
            destination: "Hồ Chí Minh",
            events: [
              {
                date_time: "2023-12-10 10:00:00",
                location: "Quảng Ninh",
                description: "Đơn hàng được tạo",
              },
              {
                date_time: "2023-12-12 12:00:00",
                location: "Hồ Chí Minh",
                description: "Đơn hàng đến kho của nhà vận chuyển",
              },
              {
                date_time: "2023-12-12 15:00:00",
                location: "Hồ Chí Minh",
                description: "Đơn hàng bị hủy",
              },
            ],
          },
        ],
      };
    },
  };
  </script>
  