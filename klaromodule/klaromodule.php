<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class KlaroModule extends Module
{
    public function __construct()
    {
        $this->name = 'klaromodule';
        $this->tab = 'front_office_features';
        $this->version = '1.0.4';
        $this->author = 'NDC';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('NDC Klaro Cookie Consent Module');
        $this->description = $this->l('Integrate NDC Klaro cookie consent manager into PrestaShop.');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');
    }

    public function install()
{
    if (!parent::install()) {
        return false;
    }

    // Registra el módulo en el hook 'displayHeader' para todas las tiendas
    if (!$this->registerHook('displayHeader')) {
        return false;
    }

    return true;
}

    public function hookDisplayHeader($params)
    {
        $this->context->smarty->assign('klaroScriptPath', $this->_path . 'views/js/ndc_klaro.min.js');
        return $this->display(__FILE__, 'views/templates/hook/header.tpl');
    }


}
