export type TSelectData = {
  label: string;
  value: string;
};
export const NavbarLayer = [
  {
    label: "Tất cả",
    value: "",
  },
  {
    label: "Cân phòng thí nghiệm",
    value: "can phong thi nghiem",
    children: [
      {
        label: "Cân phân tích",
        value: "can phan tich",
      },
      {
        label: "Cân sấy ẩm",
        value: "can say am",
      },
      {
        label: "Cân tỷ trọng",
        value: "can ty trong",
      },
    ],
  },
  {
    label: "Cân kỹ thuật",
    value: "can ky thuat",
  },
  {
    label: "Cân đếm số lượng",
    value: "can dem so luong",
  },
  {
    label: "Cân bàn - cân sàn",
    value: "can ban va can san",
    children: [
      {
        label: "Cân phân tích kỹ thuật",
        value: "can phan tich ky thuat",
      },
      {
        label: "Cân đĩa",
        value: "can dia",
      },
    ],
  },
  {
    label: "Cân treo",
    value: "can treo",
  },
  {
    label: "Cân xe nâng",
    value: "can xe nang",
  },
  {
    label: "Cân ngành vàng",
    value: "can nganh vang",
  },
  {
    label: "Cân tính tiền",
    value: "can tinh tien",
  },
  {
    label: "Thiết bị cân",
    value: "thiet bi can",
    children: [
      {
        label: "Cảm ứng tải",
        value: "cam ung tai",
      },
      {
        label: "Bộ chỉ thị cân",
        value: "bo chi thi can",
      },
      {
        label: "Máy in cân",
        value: "may in can",
      },
      {
        label: "Quả cân",
        value: "qua can",
      },
    ],
  },
];
