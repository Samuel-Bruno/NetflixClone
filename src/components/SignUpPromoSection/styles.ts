import styled from 'styled-components'


export const PromoSection = styled.section`{
  border-top: 8px solid #222;
  padding: 70px 45px;
}`

export const PromoSectionContainer = styled.div`{
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
}`

export const PromoSectionTexts = styled.div<{ reverse?: boolean }>`{
  width: 52%;
  padding-${p => p.reverse ? 'left' : 'right'}: 20px;
  display: flex;
  flex-direction: column;
}`

export const PromoSectionTitle = styled.span`{
  font-family: 'Netflix Sans Md';
  font-size: 50px;
  color: white;
  margin-bottom: 14px;
}`

export const PromoSectionDesc = styled.span`{
  font-family: 'Netflix Sans Rg';
  font-size: 26px;
  color: white;
}`

export const PromoSectionMediaArea = styled.div<{ reverse?: boolean }>`{
  width: 48%;
  height: 100%;
  display: flex;
  flex: 0 1 auto;
  padding-${p => p.reverse ? 'right' : 'left'}: 24px;
}`

export const PromoMediaWrapper = styled.div<{ reverse?: boolean }>`{
  position: relative;
  margin: ${p => p.reverse ? '-5% 0 -5% 0' : '-10% -5% -5% 0'};
}`

export const PromoImage = styled.img`{
  position: relative;
  z-index: 2;
  border: 0;
  max-width: 100%;
}`

export const PromoVideoArea = styled.div`{
  position: absolute;
  width: 73%;
  height: auto;
  top: 48%;
  left: 49.5%;
  transform: translateX(-50%) translateY(-50%);

  video {
    width:100%;
  }
}`

export const DeviceVideoArea = styled.div`{
  position: absolute;
  width: 61%;
  height: auto;
  top: 34%;
  left: 49.5%;
  transform: translateX(-50%) translateY(-50%);

  video {
    width:100%;
  }
}`